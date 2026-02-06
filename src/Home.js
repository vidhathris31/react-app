function Home() {
  return (
    <div>
      <h3>Employee List</h3>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Developer</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Alice</td>
            <td>Designer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
