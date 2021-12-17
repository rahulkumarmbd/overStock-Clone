
let header = () =>{

    return `<!--------------------------------------- header start ------------------------------------>
    <header class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><img src = "images/svgexport-1.png"></a>
              <a class="mediaImage" href = "#"><img src = "images/svgexport-1.png"></a>
              <input class = "mediaSearch icon" value placeholder="Search"/>
              <img class = "mediaCart" src = "images/Cart Empty.png"/>
              <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span> -->
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!------------------------------ Search bar ---------------------------------->
                <!-- <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit"><img src = "images/Search-1.png"/></button>
                </form> -->
                <div class="input-group mb-3 d-flex">
                  <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2">
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2"><img src = "images/Search-1.png"/></button>
                </div>
                <!--------------------------- side drop down ---------------------------------->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" id = "dropdown">
                      <img  class = "img1" src = "images/User.png"/>
                      <a class="nav-link active" id="dropbtn" aria-current="page" href="#">Account</a>
                        <div id="dropdown-content">
                          <a href="">My Accounts</a>
                          <a href="">My Orders</a>
                          <a href="">My Reviews</a>
                          <a href="">Gift Cards</a>
                          <a href="">Help</a>
                          <div></div>
                          <a class = "logout" href="#">Signout</a>
                      </div>
  
  
                    </li>
                    <li class="nav-item" id = "dropdown">
                        <img class = "img2" src = "images/Heart.png"/>
                        <a class="nav-link active" id="dropbtn" aria-current="page" href="#">&nbsp;&nbsp;Lists</a>
                        <div id="dropdown-content" class = "drdown">
                          <a href="">Favorites</a>
                          <a href="">Save for Later</a>
                          <div></div>
                          <a class = "logout" href="#">View All my Lists</a>
                          <a href="">Find a Lists</a>
                      </div>
                    </li>
                    <li class="nav-item">
                       <img src = "images/Cart Empty.png"/>
                        <a class="nav-link active" aria-current="page" href="#">Cart</a>
                      </li>
                  </ul>
              </div>
            </div>
  
            <!-------------------------------- topnavbar ------------------------------------>
              <div class = "topnav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  
                  <!-- furniture -->
                  <li class="topnav-item topdropdown">
                    <a class="nav-link active topdropbtn" aria-current="page" href="#">Furniture</a>
                    <div class="topdropdown-content">
                     
                      <div class = "topdropdown_div">
                        <div class = "topdropdown_div1">
                          <div class = "firstDiv1">
                            <a href="" class="headanchor">Living Room Furniture</a>
                            <a href="" class="anchor">Sofa and Couches</a>
                            <a href="" class="anchor">Sectional</a>
                            <a href="" class="anchor">Benches</a>
                            <a href="" class="anchor">Ottomans & Poufs</a>
                            <a href="" class="anchor">Accent Chairs</a>
                            <a href="" class="anchor">Recliners</a>
                            <a href="" class="anchor">Coffee & Accent Tables</a>
                            <a href="" class="anchor">TV Stands</a>
                            <a href="" class="headanchor">Patio & Outdoor Furniture</a>
                            <a href="" class="anchor">Patio Furniture Sets</a>
                            <a href="" class="anchor">Sofas,Chairs & Sectionals</a>
                            <a href="" class="anchor">Dining Sets</a>
                            <a href="" class="anchor">Coffee & Side Tables</a>
                            <a href="" class="anchor">Chaise Lounges</a>
                            <a href="" class="anchor">Adirondack Chairs</a>
                            <a href="" class="anchor">Hammocks & Swings</a>
                          </div>
                          <!-- <div class = "secondDiv1"></div> -->
                        </div>
                        <div class = "topdropdown_div1">
                          <div class = "firstDiv1">
                            <a href="" class="headanchor">Bedroom Furniture</a>
                            <a href="" class="anchor">Beds</a>
                            <a href="" class="anchor">Bedroom Sets</a>
                            <a href="" class="anchor">Headboards</a>
                            <a href="" class="anchor">Bed Frames</a>
                            <a href="" class="anchor">Dressers & Chests</a>
                            <a href="" class="anchor">Nightstands</a>
                            <a href="" class="anchor">Armoires & Wardrobes</a>
                            <a href="" class="anchor">Mattresses</a>
                            <a href="" class="anchor">Kids Beds</a>
                            <a href="" class="headanchor">Office Furniture</a>
                            <a href="" class="anchor">Desks</a>
                            <a href="" class="anchor">Office Chairs</a>
                            <a href="" class="anchor">Small Space Desks</a>
                            <a href="" class="anchor">Office Shelves & Storage</a>
                            <a href="" class="anchor">File Cabinets</a>
                            <a href="" class="anchor">Office & Confrence Tables</a>
                         </div>
                        </div>
                        <div class = "topdropdown_div1">
                         <div class = "firstDiv1">
                            <a href="" class="headanchor">Dining Kitchen & Bar</a>
                            <a href="" class="anchor">Kitchen & Dining Sets</a>
                            <a href="" class="anchor">Kitchen & Dining Chairs</a>
                            <a href="" class="anchor">Kitchen & Dining Tables</a>
                            <a href="" class="anchor">Counter & Bar Stools</a>
                            <a href="" class="anchor">Bar Tables</a>
                            <a href="" class="anchor">Buffets & Sideboards</a>
                            <a href="" class="anchor">Home Bars</a>
                            <a href="" class="anchor">Kitchen Islands & Carts</a>
                            <a href="" class="headanchor">More</a>
                            <a href="" class="anchor">Entryway</a>
                            <a href="" class="anchor">Bathroom</a>
                            <a href="" class="anchor">Home Gym</a>
                            <a href="" class="anchor">Rec Room</a>
                            <a href="" class="anchor">Small Space Living</a>
                            <a href="" class="anchor">Kids & Baby Furniture</a>
                        </div>
                        </div>
                        <div class = "topdropdown_div1">
                          <div class = "firstDiv1">
                          <div class = topimgDiv> 
                            <img class="furniture_div" src = "images/furniture_divimg.jpg"/>
                            <p class= "extra">extra 15% off</p>
                            <p class= "about">Select Furniture by Christopher Knight</p>
                          </div>
                          <div class = "firstDiv1">
                          <a href="" class="blackanchor">More Ways to Shop</a>
                            <a href="" class="redanchor">Fetured Sales</a>
                            <a href="" class="redanchor">New Arrivals</a>
                             <a href="" class="redanchor">Clearance</a>
                             <a href="" class="redanchor">Furniture Advice</a>
                          </div>
                        </div> 
                      </div>
  
                  </div>
                  </li>
  
                  <!-- Rugs -->
                  <li class="topnav-item topdropdown">
                      <a class="nav-link active topdropbtn" aria-current="page" href="#">Rugs</a>
                      <div class="topdropdown-content">
                        <div class = "topdropdown_div">
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Area and Rugs</a>
                              <a href="" class="anchor">3'*5'</a>
                              <a href="" class="anchor">4'*6'</a>
                              <a href="" class="anchor">5'*8'</a>
                              <a href="" class="anchor">6'*9'</a>
                              <a href="" class="anchor">7'*9'</a>
                              <a href="" class="anchor">8'*10'</a>
                              <a href="" class="anchor">9'*12'</a>
                              <a href="" class="anchor">10'*14'</a>
                              <a href="" class="headanchor">One of a Kind Rugs</a>
                              <a href="" class="anchor">3'*5'</a>
                              <a href="" class="anchor">4'*6'</a>
                              <a href="" class="anchor">5'*8'</a>
                              <a href="" class="anchor">6'*9'</a>
                              <a href="" class="anchor">7'*9'</a>
                              <a href="" class="anchor">8'*10'</a>
                              <a href="" class="anchor">9'*12'</a>
                            </div>
                            <div class = "secondDiv1"></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Rug Pads</a>
                              <a href="" class="anchor">5'*8'</a>
                              <a href="" class="anchor">6'*9'</a>
                              <a href="" class="anchor">8'*10'</a>
                              <a href="" class="anchor">9'*12'</a>
                              <a href="" class="anchor">10'*14'</a>
                              <a href="" class="anchor">Non-Slip</a>
                              <a href="" class="anchor">Round</a>
                              <a href="" class="anchor">Runner</a>
                              <a href="" class="headanchor">Runner Rugs</a>
                              <a href="" class="anchor">6'</a>
                              <a href="" class="anchor">8'</a>
                              <a href="" class="anchor">10'</a>
                              <a href="" class="anchor">12'</a>
                              <a href="" class="anchor">14'</a>
                           </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Rugs by Type</a>
                              <a href="" class="anchor">Shag Rugs</a>
                              <a href="" class="anchor">Outdoor Rugs</a>
                              <a href="" class="anchor">Handmade Rugs</a>
                              <a href="" class="anchor">Washable Rugs</a>
                              <a href="" class="anchor">Kids & Tweens Rugs</a>
                              <a href="" class="anchor">Doormates</a>
                              <a href="" class="anchor">Stair Treads</a>
                              <a href="" class="anchor">Kitchen Rugs & Mats</a>
                              <a href="" class="headanchor">Area Rugs by Shape</a>
                              <a href="" class="anchor">Round</a>
                              <a href="" class="anchor">Rectangle</a>
                              <a href="" class="anchor">Runner</a>
                              <a href="" class="anchor">Square</a>
                              <a href="" class="anchor">Oval</a>
                          </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <div class = topimgDiv> 
                                <img class="furniture_div" src = "images/Rug.jpg"/>
                                <p class= "extra">extra 15% off</p>
                                <p class= "about">Select Rugs*</p>
                              </div>
                              <div class = "firstDiv1">
                              <a href="" class="blackanchor">More Ways to Shop</a>
                                <a href="" class="redanchor">Fetured Sales</a>
                                <a href="" class="redanchor">New Arrivals</a>
                                 <a href="" class="redanchor">Clearance</a>
                                 <a href="" class="redanchor">Rugs Advice</a>
                              </div>
                            </div> 
                            <div></div>
                          </div>
                        </div>
                    </div>
                  </li>
  
                  <!-- Decor -->
                  <li class="topnav-item topdropdown">
                      <a class="nav-link active topdropbtn" aria-current="page" href="#">Decor</a>
                      <div class="topdropdown-content">
                        <div class = "topdropdown_div">
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Mirrors</a>
                              <a href="" class="anchor">Wall Mirrors</a>
                              <a href="" class="anchor">Bathroom Vanity Mirrors</a>
                              <a href="" class="anchor">Floor Mirrors</a>
                              <a href="" class="anchor">Full Length Mirrors</a>
                              <a href="" class="anchor">Rectangular Mirrors</a>
                              <a href="" class="anchor">Round Mirrors</a>
                              <a href="" class="anchor">Window Mirrors</a>
                              <a href="" class="headanchor">Mirror sets</a>
                              <a href="" class="anchor">Gallery Wrapped Canvas</a>
                              <a href="" class="anchor">Canvas Art</a>
                              <a href="" class="anchor">Framed Prints</a>
                              <a href="" class="anchor">Unframed Prints</a>
                              <a href="" class="anchor">Metal Art</a>
                              <a href="" class="anchor">Wood Wall Art</a>
                              <a href="" class="anchor">Matching Sets</a>
                            </div>
                            <div class = "secondDiv1"></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Decorative Accessories</a>
                              <a href="" class="anchor">Indoor Fireplaces</a>
                              <a href="" class="anchor">Outdoor Decor</a>
                              <a href="" class="anchor">Accent Pieces</a>
                              <a href="" class="anchor">Silk Plants</a>
                              <a href="" class="anchor">Candles & Holders</a>
                              <a href="" class="anchor">Vases</a>
                              <a href="" class="anchor">Room Dividers</a>
                              <a href="" class="anchor">Photo Frames & Albums</a>
                              <a href="" class="anchor">Planters,Hangers & Stands</a>
                              <a href="" class="headanchor">Window Treatments</a>
                              <a href="" class="anchor">Curtains & Drapes</a>
                              <a href="" class="anchor">Blinds & Shades</a>
                              <a href="" class="anchor">Curtain Rods & Hardware</a>
                              <a href="" class="anchor">Sheer Curtains</a>
                              <a href="" class="anchor">Blackout Curtains</a>
                              <a href="" class="anchor">Kitchen Curtains</a>
                              
                            </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Wall Decor</a>
                              <a href="" class="anchor">Wall Sculptures</a>
                              <a href="" class="anchor">Decorative Shelves</a>
                              <a href="" class="anchor">Wall Tapestries</a>
                              <a href="" class="anchor">Clocks</a>
                              <a href="" class="anchor">Wall Decals</a>
                              <a href="" class="anchor">Acrylic Wall Art</a>
                              <a href="" class="headanchor">Throw Pillows</a>
                              <a href="" class="anchor">Accent Pillows</a>
                              <a href="" class="anchor">Floor Pillows</a>
                              <a href="" class="anchor">Poufs</a>
                              <a href="" class="anchor">Pillow Covers</a>
                              <a href="" class="anchor">Bed Rest</a>
                            </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <div class = topimgDiv> 
                                <img class="furniture_div" src = "images/Decor.jpg"/>
                                <p class= "extra">extra 15% off</p>
                                <p class= "about">Select Home Decor*</p>
                              </div>
                              <div class = "firstDiv1">
                              <a href="" class="blackanchor">More Ways to Shop</a>
                                <a href="" class="redanchor">Fetured Sales</a>
                                <a href="" class="redanchor">New Arrivals</a>
                                 <a href="" class="redanchor">Clearance</a>
                                 <a href="" class="redanchor">Decor Advice</a>
                              </div>
                            </div> 
                            <div></div>
                          </div>
                        </div>
                    </div>
                    </li>
  
                    <!-- Bed & Bath -->
                    <li class="topnav-item topdropdown">
                      <a class="nav-link active topdropbtn" aria-current="page" href="#">Bed & Bath</a>
                      <div class="topdropdown-content">
                        <div class = "topdropdown_div">
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Bedding</a>
                              <a href="" class="anchor">Comforter Sets</a>
                              <a href="" class="anchor">Duvet Covers</a>
                              <a href="" class="anchor">Bed-in-a-Bag</a>
                              <a href="" class="anchor">Quilts & Coverlets</a>
                              <a href="" class="anchor">Blankets & Throws</a>
                              <a href="" class="anchor">Bedspreads</a>
                              <a href="" class="headanchor">Bath & Towels</a>
                              <a href="" class="anchor">Shower Curtains</a>
                              <a href="" class="anchor">Towels</a>
                              <a href="" class="anchor">Bath Rugs & Mats</a>
                              <a href="" class="anchor">Bath Accessories</a>
                              <a href="" class="anchor">Bath Robes</a>
                              <a href="" class="anchor">Kids Bath</a>
                            </div>
                            <div class = "secondDiv1"></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Bedding Basics</a>
                              <a href="" class="anchor">Sheets & Pillowcases</a>
                              <a href="" class="anchor">Mattress Pads & Toppers</a>
                              <a href="" class="anchor">Comforters & Duvet Inserts</a>
                              <a href="" class="anchor">Pillow</a>
                              <a href="" class="anchor">Cotton Bedding</a>
                              <a href="" class="headanchor">Kids Bedding</a>
                              <a href="" class="anchor">Kids Comforter Sets</a>
                              <a href="" class="anchor">Kids Bed-in-a-Bag</a>
                              <a href="" class="anchor">Kids Quilts</a>
                              <a href="" class="anchor">Kids Bed Tents & Canopies</a>
                              <a href="" class="anchor">Kids Matteresses</a>
                             
                            </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Mattresses</a>
                              <a href="" class="anchor">Twin</a>
                              <a href="" class="anchor">Twin XL</a>
                              <a href="" class="anchor">Full</a>
                              <a href="" class="anchor">Queen</a>
                              <a href="" class="anchor">King</a>
                              <a href="" class="anchor">California King</a>
                              <a href="" class="anchor">Air Mattresses</a>
                              <a href="" class="anchor">Mattresses in a Box</a>
                              <a href="" class="headanchor">Bathroom Furniture</a>
                              <a href="" class="anchor">Bathroom Vanities</a>
                              <a href="" class="anchor">Bathroom Vanity Mirrors</a>
                              <a href="" class="anchor">Bathroom Sinks</a>
                              <a href="" class="anchor">Bathroom Faucents</a>
                              <a href="" class="anchor">Bathroom Cabinats</a>
                              <a href="" class="anchor">Tubs</a>
                              <a href="" class="anchor">Showers</a>
                            </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <div class = topimgDiv> 
                                <img class="furniture_div" src = "images/bednbath.jpg"/>
                                <p class= "extra">extra 15% off</p>
                                <p class= "about">Select Bedding & Bath*</p>
                              </div>
                              <div class = "firstDiv1">
                              <a href="" class="blackanchor">More Ways to Shop</a>
                                <a href="" class="redanchor">Fetured Sales</a>
                                <a href="" class="redanchor">New Arrivals</a>
                                 <a href="" class="redanchor">Clearance</a>
                                 <a href="" class="redanchor">Bedding Advice</a>
                              </div>
                            </div> 
                            <div></div>
                          </div>
                        </div>
                    </div>
                    </li>
  
                    <!-- Home Improvement -->
                    <li class="topnav-item topdropdown">
                      <a class="nav-link active topdropbtn" aria-current="page" href="#">Home Improvement</a>
                      <div class="topdropdown-content">
                       
                        <div class = "topdropdown_div">
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Kitchen</a>
                              <a href="" class="anchor">Ranges & Ovens</a>
                              <a href="" class="anchor">Refrigerators</a>
                              <a href="" class="anchor">Kitchen Carts & Islands</a>
                              <a href="" class="anchor">Kitchen Sinks</a>
                              <a href="" class="anchor">Kitchen Faucets</a>
                              <a href="" class="anchor">Kitchen Cabinets</a>
                              <a href="" class="anchor">Backsplash</a>
                              <a href="" class="headanchor">Flooring & Wall</a>
                              <a href="" class="anchor">Tile</a>
                              <a href="" class="anchor">Laminate Flooring</a>
                              <a href="" class="anchor">Vinyl Flooring</a>
                              <a href="" class="anchor">Hardwood Flooring</a>
                              <a href="" class="anchor">Wall Tiles</a>
                              <a href="" class="anchor">Ceiling Tiles</a>
                              
                            </div>
                            <div class = "secondDiv1"></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Bathroom</a>
                              <a href="" class="anchor">Bathroom Vanities</a>
                              <a href="" class="anchor">Bathroom Vanity Mirrors</a>
                              <a href="" class="anchor">Bathroom Sinks</a>
                              <a href="" class="anchor">Bathroom Faucets</a>
                              <a href="" class="anchor">Bathroom Cabinets</a>
                              <a href="" class="anchor">Tubs</a>
                              <a href="" class="anchor">Showers</a>
                              <a href="" class="anchor">Toilets</a>
                              <a href="" class="headanchor">Home Essentials</a>
                              <a href="" class="anchor">Vaccums & Floorcare</a>
                              <a href="" class="anchor">Heating & cooling</a>
                              <a href="" class="anchor">Air & Quality</a>
                              <a href="" class="anchor">Sewing Machines</a>
                              <a href="" class="anchor">Craft Machines</a>
                            </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Storage & Organization</a>
                              <a href="" class="anchor">Outdoor Storage</a>
                              <a href="" class="anchor">Laundry Room</a>
                              <a href="" class="anchor">Garage Storage</a>
                              <a href="" class="anchor">Decorative Storage</a>
                              <a href="" class="anchor">Closet Organizers</a>
                              <a href="" class="anchor">Kitchen & Pantry</a>
                              <a href="" class="anchor">Cabinates</a>
                              <a href="" class="anchor">Furniture Storage</a>
                              <a href="" class="anchor">Safes</a>
                            </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <div class = topimgDiv> 
                                <img class="furniture_div" src = "images/home.jpg"/>
                                <p class= "extra">extra 15% off</p>
                                <p class= "about">Select Home Improvement*</p>
                              </div>
                              <div class = "firstDiv1">
                              <a href="" class="blackanchor">More Ways to Shop</a>
                                <a href="" class="redanchor">Fetured Sales</a>
                                <a href="" class="redanchor">New Arrivals</a>
                                 <a href="" class="redanchor">Clearance</a>
                                 <a href="" class="redanchor">Home Improvements Advice</a>
                              </div>
                            </div> 
                            <div></div>
                          </div>
                        </div>
                    </div>
                    </li>
  
                    <!-- Kitchen -->
                    <li class="topnav-item topdropdown">
                      <a class="nav-link active topdropbtn" aria-current="page" href="#">Kitchen</a>
                      <div class="topdropdown-content">
                        <div class = "topdropdown_div">
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Dinnerware Sets</a>
                              <a href="" class="anchor">Formal Dinnerware</a>
                              <a href="" class="anchor">Plates</a>
                              <a href="" class="anchor">Bowls</a>
                              <a href="" class="anchor">Cups & Saucers</a>
                              <a href="" class="anchor">Mugs</a>
                              <a href="" class="anchor">Flateware</a>
                              <a href="" class="anchor">Tumblers</a>
                              <a href="" class="headanchor">Cookware & Bakeware</a>
                              <a href="" class="anchor">Cookware Sets</a>
                              <a href="" class="anchor">Pots & Pans</a>
                              <a href="" class="anchor">Speciality Cookware</a>
                              <a href="" class="anchor">Grill Pans & Griddles</a>
                              <a href="" class="anchor">Cooking Essentials</a>
                              <a href="" class="anchor">Cutlery</a>
                              <a href="" class="anchor">Bakeware</a>
                            </div>
                            <div class = "secondDiv1"></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Kitchen Furniture</a>
                              <a href="" class="anchor">Couter & Bar Stools</a>
                              <a href="" class="anchor">Kitchen & Dinning Sets</a>
                              <a href="" class="anchor">Kitchen & Dinning Chairs</a>
                              <a href="" class="anchor">Kitchen & Dinning Tables</a>
                              <a href="" class="anchor">Buffers & Sideboards</a>
                              <a href="" class="anchor">Home Bars</a>
                              <a href="" class="anchor">Kitchen Carts</a>
                              <a href="" class="anchor">Bar Tables</a>
                              <a href="" class="anchor">Kitchen Cabinets</a>
                              <a href="" class="headanchor">Kitchen Appliances</a>
                              <a href="" class="anchor">Mixers</a>
                              <a href="" class="anchor">Blenders</a>
                              <a href="" class="anchor">Coffee Makers</a>
                              <a href="" class="anchor">Air Fryers</a>
                              <a href="" class="anchor">Pressure Cookers</a>
                              <a href="" class="anchor">Food Processors</a>
                            </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Serveware</a>
                              <a href="" class="anchor">Serving Palatters</a>
                              <a href="" class="anchor">Serving Bowls</a>
                              <a href="" class="anchor">Warming Buffet & Trays</a>
                              <a href="" class="anchor">Drink Pitches</a>
                              <a href="" class="anchor">Salt & Pepper Shakers</a>
                              <a href="" class="anchor">Chip & Dip Sets</a>
                              <a href="" class="anchor">Table Linens</a>
                              <a href="" class="headanchor">Kitchen Storage</a>
                              <a href="" class="anchor">Wine Racks</a>
                              <a href="" class="anchor">Kitchen Trash Cans</a>
                              <a href="" class="anchor">Pot Racks</a>
                              <a href="" class="anchor">Panntry Storage</a>
                              <a href="" class="anchor">Kitchen Canisters</a>
                              <a href="" class="anchor">Plastic Storage Containers</a>
                            </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <div class = topimgDiv> 
                                <img class="furniture_div" src = "images/kitchen.jpg"/>
                                <p class= "extra">extra 15% off</p>
                                <p class= "about">Select Kitchen & Dining*</p>
                              </div>
                              <div class = "firstDiv1">
                              <a href="" class="blackanchor">More Ways to Shop</a>
                                <a href="" class="redanchor">Fetured Sales</a>
                                <a href="" class="redanchor">New Arrivals</a>
                                 <a href="" class="redanchor">Clearance</a>
                                 <a href="" class="redanchor">Kitchen Advice</a>
                              </div>
                            </div> 
                            <div></div>
                          </div>
                        </div>
                    </div>
                    </li>
  
                    <!-- Outdoor -->
                    <li class="topnav-item topdropdown">
                      <a class="nav-link active topdropbtn" aria-current="page" href="#">Outdoor</a>
                      <div class="topdropdown-content">
                        <div class = "topdropdown_div">
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Patio Furniture</a>
                              <a href="" class="anchor">Patio Furniture Sets</a>
                              <a href="" class="anchor">Sofas,Chairs & Sectionals</a>
                              <a href="" class="anchor">Dinning Sets</a>
                              <a href="" class="anchor">Dinning Tables</a>
                              <a href="" class="anchor">Dinning Chairs</a>
                              <a href="" class="anchor">Coffee & Side Tables</a>
                              <a href="" class="anchor">Chaise Lounges</a>
                              <a href="" class="anchor">Adirondack Chairs</a>
                              <a href="" class="anchor">Hammocks & Swings</a>
                              <a href="" class="headanchor">Gardening & Yard Care</a>
                              <a href="" class="anchor">Sheds & Outdoor Storage</a>
                              <a href="" class="anchor">Greenhouses</a>
                              <a href="" class="anchor">Gardening & Yard Tools</a>
                              <a href="" class="anchor">Mowers & Trimmers</a>
                              <a href="" class="anchor">Houses & Sprinklers</a>
                              <a href="" class="anchor">Fencing & Privacy Screens</a>
                            </div>
                            <div class = "secondDiv1"></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Outdoor Decor</a>
                              <a href="" class="anchor">Fire Pits</a>
                              <a href="" class="anchor">Outdoor Rugs</a>
                              <a href="" class="anchor">Doormates</a>
                              <a href="" class="anchor">Outdoor Lightning</a>
                              <a href="" class="anchor">Garden Accents</a>
                              <a href="" class="anchor">Outdoor Curtains & Shades</a>
                              <a href="" class="anchor">Outdoor Cushions & Pillows</a>
                              <a href="" class="anchor">Planters,Hangers & Stands</a>
                              <a href="" class="anchor">Patio Furniture Covers</a>
                              <a href="" class="headanchor">Grills & Outdoor Cooking</a>
                              <a href="" class="anchor">Gas Grills</a>
                              <a href="" class="anchor">Charcoal Grills</a>
                              <a href="" class="anchor">Smokers</a>
                              <a href="" class="anchor">Grilling Accessroies</a>
                              <a href="" class="anchor">Grilling Tools & Cookware</a>
                            </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Umbrellas & Shades</a>
                              <a href="" class="anchor">Patio Umbrella</a>
                              <a href="" class="anchor">Sunsails</a>
                              <a href="" class="anchor">Gazebos & Pergolas</a>
                              <a href="" class="anchor">Umbrella Bases</a>
                              <a href="" class="anchor">Beach Umbrellas</a>
                              <a href="" class="headanchor">Sports & Outdoors</a>
                              <a href="" class="anchor">Swing Sets</a>
                              <a href="" class="anchor">Trampolines'</a>
                              <a href="" class="anchor">Hot Tubes & Spas</a>
                              <a href="" class="anchor">Bicycles</a>
                              <a href="" class="anchor">Skating & Scooters</a>
                              <a href="" class="anchor">Lawn Games</a>
                              <a href="" class="anchor">Tents & Outdoor canopies</a>
                              <a href="" class="anchor">Sport nets & Hoops</a>
                            </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <div class = topimgDiv> 
                                <img class="furniture_div" src = "images/furniture_divimg.jpg"/>
                                <p class= "extra">extra 15% off</p>
                                <p class= "about">Select Garden & Patio*</p>
                              </div>
                              <div class = "firstDiv1">
                              <a href="" class="blackanchor">More Ways to Shop</a>
                                <a href="" class="redanchor">Fetured Sales</a>
                                <a href="" class="redanchor">New Arrivals</a>
                                 <a href="" class="redanchor">Clearance</a>
                                 <a href="" class="redanchor">Patio Advice</a>
                              </div>
                            </div> 
                            <div></div>
                          </div>
                        </div>
                    </div>
                    </li>
  
                    <!-- jewelary -->
                    <li class="topnav-item topdropdown">
                      <a class="nav-link active topdropbtn" aria-current="page" href="#">Jewelry</a>
                      <div class="topdropdown-content">
                        <!-- <a href="">Favorites</a>
                        <a href="">Save for Later</a>
                        <div></div>
                        <a class = "logout" href="#">View All my Lists</a>
                        <a href="">Find a Lists</a> -->
                        <div class = "topdropdown_div">
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">All Jewelary</a>
                              <a href="" class="anchor">Rings</a>
                              <a href="" class="anchor">Necklaces</a>
                              <a href="" class="anchor">Earings</a>
                              <a href="" class="anchor">Bracelets</a>
                              <a href="" class="anchor">Moissanite Rings</a>
                              <a href="" class="anchor">Jewelary Boxes</a>
                              <a href="" class="headanchor">Men's Jewelary</a>
                              <a href="" class="anchor">Men's Rings</a>
                              <a href="" class="anchor">Men's Necklaces</a>
                              <a href="" class="anchor">Men's Bracelets</a>
                              <a href="" class="anchor">Cuff Links</a>
                              <a href="" class="headanchor">Wedding Rings</a>
                              <a href="" class="anchor">Engagement Rings</a>
                              <a href="" class="anchor">Bridal Sets</a>
                              <a href="" class="anchor">Semi-Mount Rings</a>
                              <!-- <a href="" class="anchor">9'*12'</a> -->
                            </div>
                            <div class = "secondDiv1"></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Watches</a>
                              <a href="" class="anchor">Men's Watches</a>
                              <a href="" class="anchor">Women's Watches</a>
                              <a href="" class="anchor">Kids Watches</a>
                              <a href="" class="anchor">Luxury Watches</a>
                              <a href="" class="anchor">Watch Accessories</a>
                              <a href="" class="headanchor">Fine jewelary</a>
                              <a href="" class="anchor">Diamond Rings</a>
                              <a href="" class="anchor">Gold Necklaces</a>
                              <a href="" class="anchor">Diamond Studs</a>
                              <a href="" class="anchor">One-of-a-Kind</a>
                              <a href="" class="anchor">Vintage & Estate</a>
                              <a href="" class="anchor">Gemstone Rings</a>
                            </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <div class = topimgDiv> 
                                <img class="furniture_div" src = "images/jewelary.webp"/>
                                <p class= "extra">extra 15% off</p>
                                <p class= "about">Select Jewelary & Watches*</p>
                              </div>
                              <div class = "firstDiv1">
                              <a href="" class="blackanchor">More Ways to Shop</a>
                                <a href="" class="redanchor">Fetured Sales</a>
                                <a href="" class="redanchor">New Arrivals</a>
                                 <a href="" class="redanchor">Clearance</a>
                                 <a href="" class="redanchor">Jewelary Advice</a>
                              </div>
                            </div> 
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                    </div>
                    </li>
                    <!-- /lighting -->
                    <li class="topnav-item topdropdown">
                      <a class="nav-link active topdropbtn" aria-current="page" href="#">Lighting</a>
                      <div class="topdropdown-content">
                        
                        <div class = "topdropdown_div">
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Ceiling Lights</a>
                              <a href="" class="anchor">Chandeliers</a>
                              <a href="" class="anchor">Pendant Lights</a>
                              <a href="" class="anchor">Flush Mount Lights</a>
                              <a href="" class="anchor">Track Lighting</a>
                              <a href="" class="anchor">Recessed Lights</a>
                              <a href="" class="anchor">Semi-Flush Mount Lights</a>
                              <a href="" class="anchor">Wagon Wheels Chandeliers</a>
                              <a href="" class="headanchor">Ceiling Fans</a>
                              <a href="" class="anchor">Indoor Ceiling Fans</a>
                              <a href="" class="anchor">Fandeliers</a>
                              <a href="" class="anchor">Outdoor Ceiling Fans</a>
                              <a href="" class="anchor">Ceiling Fans Light Kits</a>
                              <a href="" class="anchor">Ceiling Fan Accessories</a>
                            </div>
                            <div class = "secondDiv1"></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Wall Lighting</a>
                              <a href="" class="anchor">Flush Mount Wall Lights</a>
                              <a href="" class="anchor">Wall Sconces</a>
                              <a href="" class="anchor">Night Lights</a>
                              <a href="" class="anchor">Picture Lights</a>
                              <a href="" class="anchor">Swing Arm Lights</a>
                              <a href="" class="anchor">Step & Hall Lights</a>
                              <a href="" class="headanchor">Outdoor Lighting</a>
                              <a href="" class="anchor">Outdoor Wall Lights</a>
                              <a href="" class="anchor">Outdoor Ceiling Lights</a>
                              <a href="" class="anchor">Landscape Lighting</a>
                              <a href="" class="anchor">String Lights</a>
                              <a href="" class="anchor">Post Lights</a>
                              <a href="" class="anchor">Security & Motion Sensor Lights</a>
                            </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Lamps & Lamp Shades</a>
                              <a href="" class="anchor">Table Lamps</a>
                              <a href="" class="anchor">Floor Lamps</a>
                              <a href="" class="anchor">Lamp Sets</a>
                              <a href="" class="anchor">Desk Lamps</a>
                              <a href="" class="anchor">Lamp Shades</a>
                              <a href="" class="anchor">Accent Lamps</a>
                              <a href="" class="headanchor">Kitchen & Bath Lighting</a>
                              <a href="" class="anchor">Kitchen Island Lights</a>
                              <a href="" class="anchor">Under Cabinet Lights</a>
                              <a href="" class="anchor">Bathroom Vanity Lights</a>
                              <a href="" class="anchor">Bathroom Sconces</a>
                              <a href="" class="anchor">Bath Bar Lights</a>
                            </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <div class = topimgDiv> 
                                <img class="furniture_div" src = "images/lighting.webp"/>
                                <p class= "extra">extra 15% off</p>
                                <p class= "about">Select Lighting*</p>
                              </div>
                              <div class = "firstDiv1">
                              <a href="" class="blackanchor">More Ways to Shop</a>
                                <a href="" class="redanchor">Fetured Sales</a>
                                <a href="" class="redanchor">New Arrivals</a>
                                 <a href="" class="redanchor">Clearance</a>
                                 <a href="" class="redanchor">Lighting Advice</a>
                              </div>
                            </div> 
                            <div></div>
                          </div>
                        </div>
                    </div>
                    </li>
  
                    <!-- Kids & Baby -->
                    <li class="topnav-item topdropdown">
                      <a class="nav-link active topdropbtn" aria-current="page" href="#">Kids & Baby</a>
                      <div class="topdropdown-content lefthov">
                        <!-- <a href="">Favorites</a>
                        <a href="">Save for Later</a>
                        <div></div>
                        <a class = "logout" href="#">View All my Lists</a>
                        <a href="">Find a Lists</a> -->
                        <div class = "topdropdown_div">
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Baby</a>
                              <a href="" class="anchor">Cribs</a>
                              <a href="" class="anchor">Crib Mattresses</a>
                              <a href="" class="anchor">Beby Bedding</a>
                              <a href="" class="anchor">Glinders & Ottomans</a>
                              <a href="" class="anchor">Changing Tables</a>
                              <a href="" class="headanchor">Toys by Age</a>
                              <a href="" class="anchor">2-4 Years</a>
                              <a href="" class="anchor">5-7 Years</a>
                              <a href="" class="anchor">8-11 Years</a>
                              <a href="" class="anchor">12-15 Years</a>
                              <a href="" class="anchor">Teen</a>
                              
                            </div>
                            <div class = "secondDiv1"></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Kids Furniture</a>
                              <a href="" class="anchor">Kids Beds</a>
                              <a href="" class="anchor">Kids Mattresses</a>
                              <a href="" class="anchor">Kids Dressers</a>
                              <a href="" class="anchor">Kids Desks</a>
                              <a href="" class="anchor">Kids Storage & Toy Boxes</a>
                              <a href="" class="anchor">Bean Bags</a>
                              <a href="" class="anchor">Kids Chairs</a>
                              <a href="" class="headanchor">Ioys & Play</a>
                              <a href="" class="anchor">Outdoor Play</a>
                              <a href="" class="anchor">Swing Sets</a>
                              <a href="" class="anchor">Pretend Play</a>
                              <a href="" class="anchor">Inflatable Bounce Houses</a>
                              <a href="" class="anchor">Kide Outdoor Furniture</a>
                              <a href="" class="anchor">Playhouses & Play Tents</a>
                            </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Kids Bedding</a>
                              <a href="" class="anchor">Kids Comforter Sets</a>
                              <a href="" class="anchor">Kids Quilts</a>
                              <a href="" class="anchor">Kids Bed-in-a-Bag</a>
                              <a href="" class="anchor">Kids Sheets</a>
                              <a href="" class="anchor">Kids Duvet Covers</a>
                              <a href="" class="anchor">Kids Canopies</a>
                              <a href="" class="anchor">Kids Blankets & Throws</a>
                              
                            </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <div class = topimgDiv> 
                                <img class="furniture_div" src = "images/kids.webp"/>
                                <p class= "extra">extra 15% off</p>
                                <p class= "about">Select Baby Products*</p>
                              </div>
                              <div class = "firstDiv1">
                              <a href="" class="blackanchor">More Ways to Shop</a>
                                <a href="" class="redanchor">Fetured Sales</a>
                                <a href="" class="redanchor">New Arrivals</a>
                                 <a href="" class="redanchor">Clearance</a>
                                 <a href="" class="redanchor">Kids & Baby Advice</a>
                              </div>
                            </div> 
                            <div></div>
                          </div>
                        </div>
                    </div>
                    </li>
                    <!-- More -->
                    <li class="topnav-item topdropdown">
                      <a class="nav-link active topdropbtn" aria-current="page" href="#">More</a>
                      <div class="topdropdown-content lefthov">
                        <!-- <a href="">Favorites</a>
                        <a href="">Save for Later</a>
                        <div></div>
                        <a class = "logout" href="#">View All my Lists</a>
                        <a href="">Find a Lists</a> -->
                        <div class = "topdropdown_div">
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Holiday</a>
                              <a href="" class="anchor">Halloween</a>
                              <a href="" class="anchor">Thanks Giving</a>
                              <a href="" class="anchor">Christmas</a>
                              <a href="" class="anchor">Hanukkah</a>
                              <a href="" class="anchor">Gifting Ideas</a>
                              <a href="" class="headanchor">Health & Beauty</a>
                              <a href="" class="anchor">Skin Care</a>
                              <a href="" class="anchor">Hair Care</a>
                              <a href="" class="headanchor">Makeup</a>
                              <a href="" class="anchor">Perfumes & Fragrances</a>
                              <a href="" class="anchor">Holistic Supplies</a>
                            </div>
                            <div class = "secondDiv1"></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Apprael</a>
                              <a href="" class="anchor">Women's Clothing</a>
                              <a href="" class="anchor">Women's Shoes</a>
                              <a href="" class="anchor">men's Clothing</a>
                              <a href="" class="anchor">men's Shoes</a>
                              <a href="" class="anchor">Beauty</a>
                              <a href="" class="anchor">Accessories</a>
                              <a href="" class="headanchor">Exercise Equipment</a>
                              <a href="" class="anchor">Home Gym Systems</a>
                              <a href="" class="anchor">Treadmills</a>
                              <a href="" class="anchor">Exercise Bikes</a>
                              <a href="" class="anchor">Ellipticals</a>
                              <a href="" class="anchor">Rowers</a>
                              <a href="" class="anchor">Strength & Conditioning</a>
                              <a href="" class="anchor">Yoga & Pilates</a>
                              <a href="" class="anchor">Home Gym Mats</a>
                            </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <a href="" class="headanchor">Pet Supplies</a>
                              <a href="" class="anchor">Dog Supplies</a>
                              <a href="" class="anchor">Cat Supplies</a>
                              <a href="" class="anchor">Bird Supplies</a>
                              <a href="" class="anchor">Fish Supplies</a>
                              <a href="" class="anchor">Small Animal Supplies</a>
                              <a href="" class="anchor">Pet Friendly Home</a>
                              <a href="" class="headanchor">Entryway</a>
                              <a href="" class="anchor">Hall Trees</a>
                              <a href="" class="anchor">Console Tables</a>
                              <a href="" class="anchor">Coat Racks</a>
                              <a href="" class="anchor">Benches</a>
                              <a href="" class="anchor">Wall Hocks</a>
                            </div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div class = "firstDiv1">
                              <div class = topimgDiv> 
                                <img class="furniture_div" src = "images/more.webp"/>
                                <p class= "extra">extra 15% off</p>
                                <p class= "about">Select Christmas Decorations*</p>
                              </div>
                              <div class = "firstDiv1">
                              <a href="" class="blackanchor">More Ways to Shop</a>
                                <a href="" class="redanchor">Fetured Sales</a>
                                <a href="" class="redanchor">New Arrivals</a>
                                 <a href="" class="redanchor">Clearance</a>
                                 <a href="" class="redanchor">Rugs Advice</a>
                              </div>
                            </div> 
                            <div></div>
                          </div>
                        </div>
                    </div>
                    </li>
                    <li class="topnav-item topdropdown">
                      <a class="nav-link active topdropbtn" aria-current="page" href="#">Holiday & Gifts</a>
                      <div class="topdropdown-content lefthov holiday">
                        <!-- <a href="">Favorites</a>
                        <a href="">Save for Later</a>
                        <div></div>
                        <a class = "logout" href="#">View All my Lists</a>
                        <a href="">Find a Lists</a> -->
                        <div class = "holiday_div">
                          <!-- <div class = "topdropdown_div1">
                            <div class = "firstDiv1"></div>
                            <div class = "secondDiv1"></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div></div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div></div>
                            <div></div>
                          </div>
                          <div class = "topdropdown_div1">
                            <div></div>
                            <div></div>
                          </div> -->
                          <p class="holidayPara">Holiday & Gifting</p>
                          <div class = "firstHolidayDiv">
                            <div class="holidayImgDiv">
                              <img src = "images/christmas.webp"/>
                              <p>Christmas</p>
                            </div>
                            <div class="holidayImgDiv">
                              <img src = "images/gift-ideas.webp"/>
                              <p> Gift Ideas</p>
                            </div>
                            <div class="holidayImgDiv">
                              <img src = "images/giftcards.webp"/>
                              <p>Gift Cards</p>
                            </div>
                            <div class="holidayImgDiv">
                              <img src = "images/shopallholidaygifts.webp"/>
                              <p>Shop all Holiday & Gifts</p>
                            </div>
                          </div>
                          <p class="holidayPara">Inspiration & Ideas</p>
                          <div class = "firstHolidayDiv">
                            <div class="holidayImgDiv">
                              <img src = "images/HoliGift.webp"/>
                              <p>Best Home Gifts For Christmas</p>
                            </div>
                            <div class="holidayImgDiv">
                              <img src = "images/HoliGift2.jpg"/>
                              <p>Christmas Decorating Themes</p>
                            </div>
                            <div class="holidayImgDiv">
                              <img src = "images/HoliGift3.jpg"/>
                              <p>Christmas Tree Buying Guide</p>
                            </div>
                            <div class="holidayImgDiv">
                              <img src = "images/HoliGift4.jpg"/>
                              <p>The Best Appliance Gifts</p>
                            </div>
                          </div>
                    
                        </div>
                    </div>
                    </li>
                    <li class="topnav-item topdropdown">
                      <a class="nav-link active topdropbtn" aria-current="page" href="#">Sales & Deals</a>
                      <div class="topdropdown-content lefthov sales">
                        <div class = "topdropdown_div sales_div">
                          <div class = "salesDiv1">
                            <h1>sales & deals</h1>
                            <p>shop. save. love. repeat</p>
                            <button>Shop now</button>
                          </div>
                          <div class = "salesDiv2">
                            <div class="imgDivSales">
                              <img src = "images/christmas_sales.jpg"/>
                              <p>huge savings </br> on beautiful home updates</p>
                            </div>
                            <div class="imgDivSales">
                              <img src = "images/StorageWithStyle.png"/>
                              <p>storage with style</br> organise with ease</p>
                            </div>
                            <div class="imgDivSales">
                              <img src = "images/ShagRugs.webp"/>
                              <p>chic shag rugs</br> shop rugs both pulse & pretty</p>
                            </div>
                            <div class="imgDivSales">
                              <img src = "images/MultifunctionalFurniture.webp"/>
                              <p>multifunctional furniture</br> furnish with form and function</p>
                            </div>
                          </div>
                        </div>
                    </div>
                    </li>
                </ul>
              </div>
          </nav>
  
          <!-- <div class = "topnav">fdkjbgl</div> -->
  
           
    </header>
  
    <!-- Optional JavaScript; choose one of the two! -->
  
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  
    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->`
  }
  
  export default header;