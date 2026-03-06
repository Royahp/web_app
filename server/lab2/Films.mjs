class Film {
    constructor(id,title,favorite=false,watchdate=null,rating=null,user=1){
      this.id = id;
      this.title = title ;
      this.favorite = favorite ;
      this.watchdate = watchdate ;
      this.rating = rating ;
      this.user = user

    }
}

export default (Film)