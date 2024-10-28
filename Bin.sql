-- Create Database
CREATE DATABASE smart_bin_management;

-- Use the Database
USE smart_bin_management;

-- Create a table for bins
CREATE TABLE bins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(255) NOT NULL,
    status ENUM('Full', 'Empty') NOT NULL,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    capacity INT NOT NULL,
    current_fill INT NOT NULL,
    latitude DECIMAL(9, 6) NOT NULL,
    longitude DECIMAL(9, 6) NOT NULL
);

-- Insert sample data for bins in Potheri, Chennai
INSERT INTO bins (location, status, capacity, current_fill, latitude, longitude) VALUES 
('Potheri - Bin 1', 'Full', 100, 90, 12.9175, 80.0422),
('Potheri - Bin 2', 'Full', 100, 85, 12.9180, 80.0430),
('Potheri - Bin 3', 'Empty', 100, 20, 12.9165, 80.0415),
('Potheri - Bin 4', 'Full', 100, 95, 12.9178, 80.0425),
('Potheri - Bin 5', 'Empty', 100, 30, 12.9182, 80.0435),
('Potheri - Bin 6', 'Full', 100, 80, 12.9170, 80.0420),
('Potheri - Bin 7', 'Empty', 100, 10, 12.9160, 80.0410),
('Potheri - Bin 8', 'Full', 100, 75, 12.9185, 80.0440),
('Potheri - Bin 9', 'Empty', 100, 50, 12.9172, 80.0428),
('Potheri - Bin 10', 'Full', 100, 100, 12.9173, 80.0423);
