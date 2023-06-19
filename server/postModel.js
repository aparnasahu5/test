import mongoose from "mongoose";
const postSchema = new mongoose.Schema(
 {
 creator:{
 name:String,
 tagLine: String,
 profileImg:String,
 id:String
 },
 caption: {
 type: String,
 required: true,
 },
 desc: {
 type: String
 },
 img: {
 type: String
 }, 
 likes: {
 type: Array,
 default: [],
 },
 dislikes: {
 type: Array,
 default: [],
 },
 isPublic:{
 type:Boolean,
 default:true
 },
 saved:{
 type:Boolean,
 default:false
 },
 comments: [
 {
 name:String,
 profileImg:String,
 id:String,
 comment: String
 }
 ],
 },
 { timestamps: true }
);
export default mongoose.model("post", postSchema)