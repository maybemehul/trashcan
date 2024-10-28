import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class Bin {
    private int id;
    private String location;
    private String status;
    private int capacity;
    private int currentFill;
    private double latitude;
    private double longitude;

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public int getCapacity() { return capacity; }
    public void setCapacity(int capacity) { this.capacity = capacity; }
    public int getCurrentFill() { return currentFill; }
    public void setCurrentFill(int currentFill) { this.currentFill = currentFill; }
    public double getLatitude() { return latitude; }
    public void setLatitude(double latitude) { this.latitude = latitude; }
    public double getLongitude() { return longitude; }
    
    // JDBC Connection
    public static Connection getConnection() throws SQLException {
        String url = "jdbc:mysql://localhost:3306/smart_bin_management";
        String user = "root"; // Your MySQL username
        String password = "password"; // Your MySQL password
        return DriverManager.getConnection(url, user, password);
    }

    // Method to get all bins
    public static List<Bin> getAllBins() {
        List<Bin> bins = new ArrayList<>();
        String query = "SELECT * FROM bins";

        try (Connection conn = getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {

            while (rs.next()) {
                Bin bin = new Bin();
                bin.setId(rs.getInt("id"));
                bin.setLocation(rs.getString("location"));
                bin.setStatus(rs.getString("status"));
                bin.setCapacity(rs.getInt("capacity"));
                bin.setCurrentFill(rs.getInt("current_fill"));
                bin.setLatitude(rs.getDouble("latitude"));
                bin.setLongitude(rs.getDouble("longitude"));
                bins.add(bin);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
       
