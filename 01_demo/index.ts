class MyClass {
    prop = 10;
  
    get data() {
      return this.prop;
    }
  }
  
  const obj = new MyClass();
  
  console.log(obj.data);
  