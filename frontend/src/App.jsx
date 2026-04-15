import { useEffect, useState } from 'react';
import api from './api';
import RecordForm from './components/RecordForm';
import RecordList from './components/RecordList';

const emptyForm = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  company: '',
  designation: '',
  city: '',
  country: '',
  experience_years: '',
  notes: '',
};

function App() {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const fetchRecords = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.get('/records/');
      setRecords(response.data);
    } catch (err) {
      console.error('Fetch records error:', err);
      setError('Failed to load records. Check backend/API connection.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const validateForm = () => {
    if (!formData.first_name.trim()) return 'First name is required.';
    if (!formData.last_name.trim()) return 'Last name is required.';
    if (!formData.email.trim()) return 'Email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Enter a valid email.';
    if (!formData.phone.trim()) return 'Phone is required.';
    if (!/^\d{10,}$/.test(formData.phone.replace(/[-\s]/g, ''))) return 'Phone must have at least 10 digits.';
    if (!formData.city.trim()) return 'City is required.';
    if (!formData.country.trim()) return 'Country is required.';
    if (formData.experience_years === '') return 'Experience is required.';
    if (Number(formData.experience_years) < 0) return 'Experience cannot be negative.';
    return '';
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(emptyForm);
    setEditingId(null);
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setError('');

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      if (editingId) {
        await api.put(`/records/${editingId}/`, formData);
        setMessage('Record updated successfully.');
      } else {
        await api.post('/records/', formData);
        setMessage('Record created successfully.');
      }

      resetForm();
      fetchRecords();
    } catch (err) {
      console.error('Save record error:', err);
      const backendErrors = err.response?.data;

      if (backendErrors && typeof backendErrors === 'object') {
        const firstError = Object.values(backendErrors).flat().join(' ');
        setError(firstError || 'Something went wrong while saving.');
      } else {
        setError('Something went wrong while saving.');
      }
    }
  };

  const handleEdit = (record) => {
    setEditingId(record.id);
    setFormData({
      first_name: record.first_name || '',
      last_name: record.last_name || '',
      email: record.email || '',
      phone: record.phone || '',
      company: record.company || '',
      designation: record.designation || '',
      city: record.city || '',
      country: record.country || '',
      experience_years: record.experience_years ?? '',
      notes: record.notes || '',
    });
    setMessage('Editing selected record.');
    setError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page">
      <div className="container">
        <header className="hero">
          <h1>Record Management App</h1>
          <p>React frontend + Django REST API + PostgreSQL</p>
        </header>

        {message && <div className="alert success">{message}</div>}
        {error && <div className="alert error">{error}</div>}

        <div className="grid">
          <RecordForm
            formData={formData}
            editingId={editingId}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onCancel={resetForm}
          />

          <RecordList
            records={records}
            loading={loading}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;