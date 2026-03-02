class User {
  public id: string;
  public username: string;
  public email: string;
  public register_date: Date;

  constructor(username: string, email: string) {
    this.id = crypto.randomUUID();
    this.username = username;
    this.email = email;
    this.register_date = new Date();
  }
}

class Post {
  public title: string;
  public text: string;
  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
  }
}

class Reply {
  public text: string;
  constructor(text: string){
    this.text = text
  }
}

const post = new Post("Titre", "text")

console.log(post)
