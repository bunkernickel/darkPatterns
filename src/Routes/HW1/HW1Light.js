import React from 'react';




const HW1Light = ({pattern, text}) =>{
  
  return(
      <div className="page">
        <header className="page-header ">
          <h3>
          W̶̨̲̝̤̐͑̈̓͌̓̑̈͛͑͜͠e̴̺͇͖̝̖̙͇̫̘̤̎̾͌l̶̡̛̩̗̲̤̰̹͉̾̓̈́̒̄͐̉̒͘͘c̸̨͍͙͍̠̲͎̤͈͑̐͑͒̀̃͘͠͝ͅȍ̶̦͇̗̬̜̗̠̙̪̋̓͊͒̄̈̄̑̚͘͠m̶̛̜͉̱̂͘e̴̢̛̜̪͙̣͍̣̱̾̋̍̀̔͝͠͝͠ ̶͕̻̩̦̖͊t̸̢͙̬̠̩͓̱̝͇̙̺̘̂̄͒̅͛̓̌͠o̸̱̜̽͒̉̓́͆̕̕͜ ̴̨̬͍̻̦̫͓̞̳̮̊̆C̸̢̢̛̞͇̞̙͇̬͎͆̊̂̎̐͂̅̐͝͝o̴͚̥̯̟̜͑̿͒ͅb̷̻̠͆̽̀͛͛̅͋͊͂́͝'̵̡̮̼́̄̀̿̀̔͆̾ş̶͇̤̤̺̘̹̖̞̓͐́̈́̇̿͑
          </h3>
        </header>
        <div className="restOfPage">
          <div className="images">
            <img className="shoeIcon" src="oldBoots.jpg" alt='old boot' width="100" height="100" />
            <img className="shoeIcon" src="oldCurled.jpg" alt='old elf shoe' width="100" height="100" />
            <img className="shoeIcon" src="oldCursed.jpg" alt='old cursed shoe' width="100" height="100" />
          </div>
          
          <div className="terms">
            <form action="/HW2Dark">
              <p><label>Privacy Policy</label></p>
              <textarea className="taLight" cols="5" rows="5" >
                {text}
              </textarea>
              <input type="submit" value="I agree" />
            </form>
          </div>
          

          <div className="moreShoes">
            <img className="shoeIcon" src='alsoOld.jpg' alt='devil shoe' width="100" height="100" />
          </div>
        </div>
      </div>
  );
};

export default HW1Light;