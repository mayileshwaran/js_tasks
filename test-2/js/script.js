let unitPrice,unit;

function bill(uname,unit) {
  unit = Number(unit);
  console.log(`User name : ${uname} `);
  if (unit) {

    if (unit <= 100) {
      unitPrice = 2;
      sum = unit * unitPrice;
    } else if (unit <= 300) {
      unitPrice = 5;
      sum = unit * unitPrice;
    } else if (unit > 300) {
      unitPrice = 10;
      sum = unit * unitPrice;
    }
   

    if (sum >= 1000) {
      num = sum + sum * 0.05;
      console.log(`Number of unit ${unit}`);
      console.log(`cost per unit ${unitPrice}`);
      console.log(`Extra addition charges ${sum * 0.05}`);
      console.log(`your bill amount with additional charges ${num}`);
      console.log("<br>");
      
    } 
    else {
        console.log(`Number of unit ${unit}`);
        console.log(`cost per unit ${unitPrice}`);
        console.log(`Your bill amount is ${sum}`);
        console.log(`There is no extra charges added for you`);
        console.log("<br>");
    }
  } 
  else {
    console.log(`enter the correct unit`);
  }

}
// bill(50);
// bill(100);
// bill(150);
// bill(200);
// bill(250);
// bill(300);
// bill(350);
// bill(200);

bill(prompt("Enter your name"),prompt("Enter your Unit of electricty used in last month"));

bill(prompt("Enter your name"),prompt("Enter your Unit of electricty used in last month"));

bill(prompt("Enter your name"),prompt("Enter your Unit of electricty used in last month"));

