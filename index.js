const express = require('express');
const cors = require('cors');
const path = require('path');

// Full Kode Di Github Saya : https://github.com/Lenwyy/
//module
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 6969;
app.enable("trust proxy");
app.set("json spaces", 2);

app.use(express.static(path.join(__dirname, 'public')));

// Middleware CORS
app.use(cors());

// Import AI
require('./ai/Blackbox')(app);
require('./ai/LuminAI')(app);
require('./ai/Thinkai')(app);
require('./ai/openai')(app);
require('./ai/ragbot')(app);
require('./ai/txt2img')(app);
require('./ai/tools-remini')(app);
require('./ai/upscale')(app);
require('./ai/ai-bing-img')(app);

// Import Berita
require('./berita/liputan6')(app);

// import Downloader 
require('./downloader/dl-aio')(app);
require('./downloader/dl-mf')(app);
require('./downloader/ytdl')(app);
require('./downloader/tiktok')(app);

// Import Search
require('./search/goodread')(app);
require('./search/ypia')(app);
require('./search/rumaysho')(app);
require('./search/surah')(app);
require('./search/jadwalsholat')(app);
require('./search/carijurnal')(app);

//import Ai Image


// Full Kode Di Github Saya : https://github.com/Lenwyy/

// Endpoint untuk halaman HTML utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/donasi', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pay.html'));
});

// Handle 404 error
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// Handle error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});