import { Schema, model } from 'mongoose';

const HotDogSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    enum: ['small', 'medium', 'big'],
    required: true
  },
  img: {
    type: String,
    default:
      'https://img05.rl0.ru/eda/c1080x1080i/s1.eda.ru/Photos/130212102403-130323124807-p-O-hot-dogi-s-lukom-po-domashnemu.jpg'
  }
});

const HotDog = model('HotDog', HotDogSchema);

export default HotDog;
