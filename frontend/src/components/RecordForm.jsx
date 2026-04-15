function RecordForm({ formData, editingId, onChange, onSubmit, onCancel }) {
  return (
    <section className="card">
      <h2>{editingId ? 'Update Record' : 'Create Record'}</h2>
      <form className="record-form" onSubmit={onSubmit}>
        <div className="form-grid">
          <div>
            <label>First Name *</label>
            <input name="first_name" value={formData.first_name} onChange={onChange} />
          </div>
          <div>
            <label>Last Name *</label>
            <input name="last_name" value={formData.last_name} onChange={onChange} />
          </div>
          <div>
            <label>Email *</label>
            <input name="email" type="email" value={formData.email} onChange={onChange} />
          </div>
          <div>
            <label>Phone *</label>
            <input name="phone" value={formData.phone} onChange={onChange} />
          </div>
          <div>
            <label>Company</label>
            <input name="company" value={formData.company} onChange={onChange} />
          </div>
          <div>
            <label>Designation</label>
            <input name="designation" value={formData.designation} onChange={onChange} />
          </div>
          <div>
            <label>City *</label>
            <input name="city" value={formData.city} onChange={onChange} />
          </div>
          <div>
            <label>Country *</label>
            <input name="country" value={formData.country} onChange={onChange} />
          </div>
          <div>
            <label>Experience (Years) *</label>
            <input name="experience_years" type="number" min="0" step="0.1" value={formData.experience_years} onChange={onChange} />
          </div>
          <div className="full-width">
            <label>Notes</label>
            <textarea name="notes" rows="4" value={formData.notes} onChange={onChange}></textarea>
          </div>
        </div>

        <div className="button-row">
          <button type="submit">{editingId ? 'Save Changes' : 'Create Record'}</button>
          {editingId && (
            <button type="button" className="secondary" onClick={onCancel}>
              Cancel Edit
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default RecordForm;
