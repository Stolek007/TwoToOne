function longest(s1, s2) {
 
  let a = [... new Set(s1.split(""))]; // from string to array
  let b = [... new Set(s2.split(""))]; // from string to array

  
  for (let i=0; i<b.length; i++){
    a.push(b[i]);
  }
  
  let preResult = [... new Set(a)];

  let result = preResult.sort().join(""); // sorted and joined

  return result;
}
