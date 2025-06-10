document.getElementById('view-report').addEventListener('click', async () => {
  try {
    const res = await fetch('http://localhost:3001/report/user1');
    if (!res.ok) throw new Error('Failed to fetch report');
    const data = await res.json();

    const reportDiv = document.getElementById('report');

    // Simple grouping by domain and total duration
    const summary = {};

    data.forEach(item => {
      const domain = (new URL(item.domain)).hostname.replace('www.', '');
      if (!summary[domain]) summary[domain] = 0;
      summary[domain] += item.duration;
    });

    // Create a sorted list by time spent descending
    const sortedDomains = Object.entries(summary).sort((a,b) => b[1] - a[1]);

    let html = '<ul>';
    sortedDomains.forEach(([domain, seconds]) => {
      const hours = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      html += `<li><b>${domain}</b>: ${hours}h ${mins}m ${secs}s</li>`;
    });
    html += '</ul>';

    reportDiv.innerHTML = html;

  } catch (error) {
    document.getElementById('report').textContent = 'Error loading report: ' + error.message;
  }
});
document.getElementById('view-report').addEventListener('click', async () => {
  try {
    const res = await fetch('http://localhost:3001/report/user1');
    if (!res.ok) throw new Error('Failed to fetch report');
    const data = await res.json();

    const reportDiv = document.getElementById('report');

    // Simple grouping by domain and total duration
    const summary = {};

    data.forEach(item => {
      const domain = (new URL(item.domain)).hostname.replace('www.', '');
      if (!summary[domain]) summary[domain] = 0;
      summary[domain] += item.duration;
    });

    // Create a sorted list by time spent descending
    const sortedDomains = Object.entries(summary).sort((a,b) => b[1] - a[1]);

    let html = '<ul>';
    sortedDomains.forEach(([domain, seconds]) => {
      const hours = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      html += `<li><b>${domain}</b>: ${hours}h ${mins}m ${secs}s</li>`;
    });
    html += '</ul>';

    reportDiv.innerHTML = html;

  } catch (error) {
    document.getElementById('report').textContent = 'Error loading report: ' + error.message;
  }
});

