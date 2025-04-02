const express = require('express');
const os = require('os');
const { execSync } = require('child_process');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('.'));

// API endpoint to get machine information
app.get('/api/info', (req, res) => {
    try {
        // Get hostname
        const hostname = os.hostname();
        
        // Get IP addresses
        const networkInterfaces = os.networkInterfaces();
        let ipAddress = 'Not available';
        
        // Find the first non-internal IPv4 address
        Object.keys(networkInterfaces).forEach((interfaceName) => {
            networkInterfaces[interfaceName].forEach((iface) => {
                if (iface.family === 'IPv4' && !iface.internal) {
                    ipAddress = iface.address;
                }
            });
        });
        
        // Get OS information
        const osType = os.type();
        const osPlatform = os.platform();
        const osRelease = os.release();
        const osInfo = `${osType} (${osPlatform}) ${osRelease}`;
        
        // Get server time
        const serverTime = new Date().toLocaleString();
        
        // Get uptime
        const uptimeSeconds = os.uptime();
        const days = Math.floor(uptimeSeconds / (3600 * 24));
        const hours = Math.floor((uptimeSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((uptimeSeconds % 3600) / 60);
        const seconds = Math.floor(uptimeSeconds % 60);
        const uptime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        
        res.json({
            hostname,
            ip: ipAddress,
            os: osInfo,
            time: serverTime,
            uptime
        });
    } catch (error) {
        console.error('Error getting system info:', error);
        res.status(500).json({ error: 'Failed to retrieve system information' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
