const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
      },
      password: {
        type: String,
        required: true,
        minlength: 6
      },
      name: {
        type: String,
        required: true,
        trim: true
      },
      college: {
        type: String,
        trim: true
      },
      city: {
        type: String,
        trim: true
      },
      skills: [{
        type: String,
        trim: true
      }],
      profileImage: {
        type: String,
        default:"https://cdn2.vectorstock.com/i/1000x1000/57/91/profile-avatar-icon-design-template-vector-28515791.jpg"
      },
      resume:{
        type:String,
      },
    }, {
      timestamps: true
    });

    userSchema.methods.getPublicProfile = function() {
      const userObject = this.toObject();
      delete userObject.password;
      return userObject;
    };
      
      const User = mongoose.model('User', userSchema);
      
      module.exports = User; 