const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Function to read all event files and convert to JSON
function buildEventsJson() {
  const eventsDir = path.join(__dirname, '../content/events');
  const events = [];
  
  try {
    // Read all markdown files in the events directory
    const files = fs.readdirSync(eventsDir).filter(file => file.endsWith('.md'));
    
    files.forEach((file, index) => {
      const filePath = path.join(eventsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      // Parse frontmatter
      const { data } = matter(fileContent);
      
      // Only include published events
      if (data.published !== false) {
        events.push({
          id: index + 1,
          title: data.title,
          date: data.date,
          time: data.time,
          location: data.location,
          instructor: data.instructor,
          description: data.description,
          additional: data.additional,
          category: data.category
        });
      }
    });
    
    // Sort events by date
    events.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Write to public directory for the website to access
    const outputPath = path.join(__dirname, '../content/events.json');
    fs.writeFileSync(outputPath, JSON.stringify(events, null, 2));
    
    console.log(`✅ Built events.json with ${events.length} events`);
  } catch (error) {
    console.error('❌ Error building events:', error);
  }
}

buildEventsJson();
