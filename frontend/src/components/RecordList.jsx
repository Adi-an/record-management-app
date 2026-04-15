function RecordList({ records, loading, onEdit }) {
  return (
    <section className="card">
      <h2>Saved Records</h2>

      {loading ? (
        <p>Loading records...</p>
      ) : records.length === 0 ? (
        <p>No records found. Create your first record.</p>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
                <th>Location</th>
                <th>Experience</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td>{record.first_name} {record.last_name}</td>
                  <td>{record.email}</td>
                  <td>{record.phone}</td>
                  <td>{record.company || '-'}</td>
                  <td>{record.city}, {record.country}</td>
                  <td>{record.experience_years} yrs</td>
                  <td>
                    <button className="small-btn" onClick={() => onEdit(record)}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default RecordList;
