import '../styles/image_viewer.css';
import picture from '../assets/yacht.jpg';

const image = document.createElement('img');
image.src = picture;

document.body.appendChild(image);
