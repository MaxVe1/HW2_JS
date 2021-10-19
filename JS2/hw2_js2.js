//validatePhoneNymber(067 734 4343) → true
//validatePhoneNymber(094 643 7432) → true
//validatePhoneNymber(083 jfvj 4554) → false
//validatePhoneNymber(Anton0938 884) → false
//validatePhoneNymber(0437348348) → true

function validatePhoneNymber(a) {
      let Str = a.split(' ').join('');
      const Reg = new RegExp("[0-9]{10}");
      const Res = Reg.test(Str);

      console.log(Str + "      "+ Res);
      return Res;
    
}

 validatePhoneNymber('067 734 4343'); 
 validatePhoneNymber('094 643 7432')  
 validatePhoneNymber('083 jfvj 4554')  
 validatePhoneNymber('Anton0938 884')  
 validatePhoneNymber('0437348348')
 validatePhoneNymber('a437348348')   