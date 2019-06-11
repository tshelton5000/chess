interface EmptyConstructor {
  new (pic: string): EmptyInterface;
}

export interface EmptyInterface{
  pic: string;
  returnPic(): string;
  canMove(): boolean;
}

const Empty: EmptyConstructor = class Empty implements EmptyInterface{
  pic: string;
  constructor(pic: string){
    this.pic = pic;
  }

  returnPic(): string{
    return this.pic;
  }

  canMove(): boolean{
    return false
  }
}

export default Empty;