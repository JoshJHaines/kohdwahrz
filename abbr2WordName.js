function abbrevName(name){
    let x = name.indexOf(" ") + 1;
    inits = name[0] + "." + name.charAt(x);
    return inits.toUpperCase();
  }