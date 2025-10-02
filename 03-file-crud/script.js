const fs = require("fs");

// CREATE a file
fs.writeFile("notes.txt", "Hello, this is my first file in Node.js!", (err) => {
  if (err) {
    console.log("Error creating file:", err);
  } else {
    console.log("✅ File created successfully!");
  }

  // READ the file
  fs.readFile("notes.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
    } else {
      console.log("📖 File content:", data);
    }

    // UPDATE 
    fs.appendFile("notes.txt", "\nThis text is appended later.", (err) => {
      if (err) {
        console.log("Error appending file:", err);
      } else {
        console.log("✏ File updated successfully!");
      }

      // DELETE the file
      fs.unlink("notes.txt", (err) => {
        if (err) {
          console.log("Error deleting file:", err);
        } else {
          console.log("🗑 File deleted successfully!");
        }
      });
    });
  });
});