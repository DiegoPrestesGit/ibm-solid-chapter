public class Customer {
  private int id;
  private String firstName;
  private String lastName;

  public Customer(final int id, final String firstName, final String lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public int getId() {
    return id;
  }

  public void setId(final int id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(final String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(final String lastName) {
    this.lastName = lastName;
  }
}

public class CustomerDaoImpl {
  private Connection getConnection(String database) throws SQLException {
    if(database == "MySQL") {
      MysqlDataSource dataSource = new MysqlDataSource();

      dataSource.setUrl("my-biutifou-url.com");
      dataSource.setUser("aquele username chapado no codigo");
      dataSource.setPassword("aquela senha de fazer vc rir, kk");

      return dataSource.getConnection();
    } else if(database == "H2") {
      JdbcDataSource dataSource = new JdbcDataSource();
      
      dataSource.setUrl("hey-hey-url.com");
      dataSource.setUser("Marcus Aurelius");
      dataSource.setPassword("a brevidade da vida");

      return dataSource.getConnection();
    }

    return null
  }

  private Customer createCustomer(ResultSet resultSet) throws SQLException {
    return new Customer(resultSet.getInt("ID"), resultSet.getString("first_name"), 
      resultSet.getString("last_name"));
  }

  @Override
  public Customer getById(int id) throws Exception {
    try {
      Connection connection = getConnection("MySQL");
      PreparedStatement statement = connection.prepareStatement("SELECT * FROM CUSTOMERS WHERE ID = ?");
      statement.setInt(1, id);
      ResultSet resultSet = statement.executeQuery();
      if (resultSet.next()) {
        return createCustomer(resultSet);
      } else {
        return null;
      }
    } catch (SQLException ex) {
      throw new Exception(ex.getMessage(), ex);
    }
  }
  // other really nice implementations

  @Override
  public boolean add(Customer customer) throws Exception {
    try {
      Connection connection = getConnection("H2");
      PreparedStatement statement = connection.prepareStatement("INSERT INTO CUSTOMERS VALUES (?,?,?)");
      statement.setInt(1, customer.getId());
      statement.setString(2, customer.getFirstName());
      statement.setString(3, customer.getLastName());
      statement.execute();
      return true;
    } catch (SQLException ex) {
      throw new Exception(ex.getMessage(), ex);
    }
  }

  @Override
  public boolean update(Customer customer) throws Exception {
    try {
      Connection connection = getConnection("MySQL");
      PreparedStatement statement = connection
        .prepareStatement("UPDATE CUSTOMERS SET first_name = ?, last_name = ? WHERE ID = ?");
      statement.setString(1, customer.getFirstName());
      statement.setString(2, customer.getLastName());
      statement.setInt(3, customer.getId());
      return statement.executeUpdate() > 0;
    } catch (SQLException ex) {
      throw new Exception(ex.getMessage(), ex);
    }
  }

  @Override
  public boolean delete(Customer customer) throws Exception {
    try {
      Connection connection = getConnection("H2");
      PreparedStatement statement = connection.prepareStatement("DELETE FROM CUSTOMERS WHERE ID = ?");
      statement.setInt(1, customer.getId());
      return statement.executeUpdate() > 0;
    } catch (SQLException ex) {
      throw new Exception(ex.getMessage(), ex);
    }
  }
}
