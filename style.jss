
body{
    max-width: 1024px;
    margin: 0 auto;
    background-color: #000;
    font-family: poppins;
}
.main-nav{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.menu{
    display: flex;
}
.menu li{
    list-style: none;
    padding: 20px;
    text-decoration: none;
}
.menu li a{
    text-decoration: none;
    color: white;
    font-size: 1.25rem;
}
.h1{
    line-height: 30px;
    font-size: 3rem;
    color: white;
}
.title h1{
    font-size: 2rem;
    color: white;
}
.title-2{
    margin-top: -54px;
    margin-left: 10px;
}
.main-content{
    margin-top: 10rem;
    display: flex;
    line-height: 30px;
}
.top-image{
    flex:50%;
    max-width: 30%;
    margin-left:29%;

}
img{
    width: 306px;
    height: 296px;
}
#profile-photo{
    border-radius: 9999px;
    border: 2px solid white;
}

.btn-resume{
    width: 110px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    padding: auto;
    border: wheat 1px solid;
    color: wheat;
    float: left;
}


a:link{
    text-decoration: none;
    color: wheat;
}



/* .btn-resume a:link,a:visited{
    color: wheat;
}
 a:hover{
    color: black;
} */

.btn-resume:hover{
    width: 110px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    padding: auto;
    border: wheat 1px solid;
    background-color: wheat;
    color: black;
    
}

.fa-download{
    margin-right: 5px;
}

.btn-contact{
    width: 110px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    padding: auto;
    border: #B3CAF5 1px solid;
    color: #B3CAF5;
    float: left;
    margin-left: 3%;
}
.btn-contact a{
    text-decoration: none;

}

.btn-contact:hover{
    width: 110px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    padding: auto;
    border: #B3CAF5 1px solid;
    background-color: #B3CAF5;
    color: black;
}

form{
    padding: 0 5% 0 5%;
}

label{
    color: white;
    font-size: 1.25rem;
}
input[type=text ], input[type=email], input[type=tel], textarea , select{
    width: 100%;
    height: 50px;
    padding: 12px 20px;
    margin: 10px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  input[type=submit] {
    width: 100%;
    background-color: wheat;
    color: black;
    padding: 14px 20px;
    margin: 12px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 100px;
  }
  .about input[type=radio] {
    display: inline;
    color: wheat;
  }

  legend{
    font-size: 1.5rem;
    color: white;
  }
.rate{
    display: none;
}
#name{
    width: 48%;
    float: left;
}
#email{
    width: 48%;
    float: left;
    margin-left: 4%;
}
#city{
    width: 32.33%;
    float: left;
}
#state{
    width: 32.33%;
    float: left;
    margin-left: 1.5%;
}
#postcode{
    width: 32.33%;
    float: left;
    margin-left: 1.5%;

}
.contact-title{
    margin-top: 20%;
 }
 .edu-title{
    margin-top: 20%;
 }

    .education{
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    }
    .edu-details{
    background: #B3CAF5;
    color: #FFF;
    float: left;
    padding: 30px;
    }
    
    .edu-details h2{
    letter-spacing: 1px;
    margin: 10px 0px;
    }
    .edu-details h6{
    letter-spacing: 1px;
    opacity: 0.8;
    text-transform: uppercase;
    margin: 0px;
    }

   #edu-card-2{
    margin-top: 5%;
   }

.edu-more-details h3{
    margin: 0px;
    margin-top: 15px;
    margin-left: 32%;
    
}
.edu-more-details h6 {
    margin: 0px;
    margin-top: 0px;
    margin-left: 32%;
    color: gray;
}
.second{
    margin-top: 2% !important;
}
.about-me{
    margin-top:20%;
}
#abtme{
    margin-top: 2%;
}
.my-details{
    background-color: #B3CAF5;
    display: flex;
    padding: 5%;
    border-radius: 10px;
}
.me{
    width: 50%;
}

.basic-info{
    width: 48%;
    margin-left: 4%;
}
.info{
    display: flex;
}
.labels{
    float: left;
    width: 40%;
}
.labels-values{
    float: left;
}
.date-value
{
    margin-left: 1%;
}

.main-nav-mobile{
    display: none;
}
#menu-ic {
    margin: auto 0;
    display: block;
    cursor: pointer;
  }
  
  #menu-ic div {
    width: 35px;
    height: 3px;
    background-color: white;
    margin: 6px 0;
    transition: 0.4s;
  }
  
  .open .bar1 {
    -webkit-transform: rotate(-45deg) translate(-6px, 6px);
    transform: rotate(-45deg) translate(-6px, 6px);
  }
  
  .open .bar2 {
    opacity: 0;
  }
  
  .open .bar3 {
    -webkit-transform: rotate(45deg) translate(-6px, -8px);
    transform: rotate(45deg) translate(-6px, -8px);
  }
  
  .open .menu2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10%;
    margin-top: 10%;
  }
  
  .menu2 {
    display: none;
    position: absolute;
    top: 50px;
    left: 0;
    width: 80%;
    background-color: gray;
  }
  
  .menu2 li {
    margin-bottom: 10px;
  }

  /* responsive Design */
@media only screen 
and (min-device-width: 320px) 
and (max-device-width: 812px) 
 {


body,html{
padding-left: 3%;
padding-right: 3%;
margin: 0;
overflow-x: hidden;

}    
.main-nav{
    display: none;
}
.main-nav-mobile{ 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

#menu-ic {
    margin: auto 0;
    cursor: pointer;
} 
.main-content {
    margin-top: 3rem;
    display: flex;
    line-height: 30px;
    flex-direction: column-reverse;
}
.top-image {
    flex: 50%;
    max-width: 50%;
    display: flex;
    justify-content: center;
} 
.top-text{
    text-align: center;
}
.h1 {
    line-height: 0.9;
    font-size: 2.5rem;
}
.btn{
    display: flex;
    justify-content: center;
}
.my-details {
    display: flex;
    padding: 5%;
    flex-direction: column;
}
.me{
    width: 100%;
}
.basic-info{
    width: 100%;
}

.edu-details{
    width: 100%;
}
.edu-more-details{
    padding: 50px 0px 50px 0px;
    margin-top: 25%;
}
.edu-more-details h3{
    margin-left: 10%;
}
.edu-more-details h6{
    margin-left: 10%;
}
.form-ul{
    padding:0;
}

}

