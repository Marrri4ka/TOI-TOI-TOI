import React from 'react';

class Footer extends React.Component{
  constructor(props) {
    super(props);
  };

render(){
return(

<div>
<footer class="page-footer font-small blue">


  <div class="footer-copyright text-center py-3">© 2019 Copyright:
    <a> Mariia Stashuk </a>
    <a href="https://github.com/Marrri4ka" class="git-ic mr-3" role="button"><i class="fab fa-lg fa-github"></i></a>
    <a  href="https://www.linkedin.com/in/mariia-stashuk/" class="li-ic mr-3" role="button"><i class="fab fa-lg fa-linkedin-in"></i></a>
    <a  href="https://www.facebook.com/maria.popovytch" class="fb-ic mr-3" role="button"><i class="fab fa-lg fa-facebook-f"></i></a>
  </div>


</footer>
</div>
);
}
}

export default Footer;
