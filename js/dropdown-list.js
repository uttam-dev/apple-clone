const dropdownList = {
    store: `
    <div class="dropdowm-list flex" iteams-data>
                <div class="col-1">
                    <p>Shope</p>
                    <h2>Shope The Latest</h2>
                    <h2>Mac</h2>
                    <h2>iPad</h2>
                    <h2>iPhone</h2>
                    <h2>Apple Watch</h2>
                    <h2>Accessories</h2>
                </div>
                <div class="col-2">
                    <p>Quick Links</p>
                    <h5>Find A Store</h5>
                    <h5>Order Status</h5>
                    <h5>Apple Trade In</h5>
                    <h5>Financing</h5>
                </div>
                <div class="col-3">
                    <p>Shope Spacial Stores</p>
                    <h5>Cetified Refebished</h5>
                    <h5>Education</h5>
                    <h5>Businesses</h5>
                    <h5>Veternas And Military</h5>
                    <h5>Government</h5>
                </div>
            </div>`,
    mac: `
            <div class="dropdowm-list flex" iteams-data>
                <div class="col-1">
                    <p>Explore Mac</p>
                    <h2>Explore All Mac</h2>
                    <h2>MacBook Air</h2>
                    <h2>MacBook Pro</h2>
                    <h2>iMac</h2>
                    <h2>iMac mini</h2>
                    <h2>Mac Studio</h2>
                    <h2>Displays</h2>
                    <h6>Compare Mac</h6>
                    <h6>Mac Does That</h6>
                </div>
                <div class="col-2">
                    <p>Shop Mac</p>
                    <h5>Shop Mac</h5>
                    <h5>Mac Accessories</h5>
                    <h5>Apple Trade In</h5>
                    <h5>Financinfg</h5>
                    </div>
                <div class="col-3">
                    <p>More from Mac</p>
                    <h5>Mac Suport</h5>
                    <h5>AppleCare+ for Mac</h5>
                    <h5>macOs Sonoma</h5>
                    <h5>Apple by Apple</h5>
                    <h5>Continuity</h5>
                    <h5>Education</h5>
                </div>
            </div>`,
    ipad: ` 
    <div class="dropdowm-list flex" iteams-data>
    <div class="col-1">
        <p>Explore iPad</p>
        <h2>Explore All iPad</h2>
        <h2>iPad 15 Pro</h2>
        <h2>iPad 15</h2>
        <h2>iPad 14</h2>
        <h2>iPad 13</h2>
        <h6>Compare iPad</h6>
        <h6>Switch from Android</h6>  
    </div>
    <div class="col-2">
        <p>Shop iPad</p>
       <h5>Shop iPad</h5>
       <h5>iPad Accessories</h5>
       <h5>Apple Trade In</h5>
       <h5>Carrier Deals at Apple</h5>
       <h5>Financing</h5>
        </div>
    <div class="col-3">
        <p>More from iPad</p>
        <h5>iPad Support</h5>
        <h5>AppleCare+ for iPad</h5>
        <h5>ios 17</h5>
        <h5>Apps by Apple</h5>
        <h5>iPad Privacy</h5>
        <h5>iCloud+</h5>
        <h5>Wallet, Pay, Card</h5>
        <h5>iPad SE</h5>
        <h5>Siri</h5>
    </div>
</div> `,
    iphone: `
            <div class="dropdowm-list flex" iteams-data>
            <div class="col-1">
                <p>Explore iPhone</p>
                <h2>Explore All iPhone</h2>
                <h2>iPhone 15 Pro</h2>
                <h2>iPhone 15</h2>
                <h2>iPhone 14</h2>
                <h2>iPhone 13</h2>
                <h6>Compare iPhone</h6>
                <h6>Switch from Android</h6>  
            </div>
            <div class="col-2">
                <p>Shop iPhone</p>
               <h5>Shop iPhone</h5>
               <h5>iPhone Accessories</h5>
               <h5>Apple Trade In</h5>
               <h5>Carrier Deals at Apple</h5>
               <h5>Financing</h5>
                </div>
            <div class="col-3">
                <p>More from iPhone</p>
                <h5>iPhone Support</h5>
                <h5>AppleCare+ for iPhone</h5>
                <h5>ios 17</h5>
                <h5>Apps by Apple</h5>
                <h5>iPhone Privacy</h5>
                <h5>iCloud+</h5>
                <h5>Wallet, Pay, Card</h5>
                <h5>iPhone SE</h5>
                <h5>Siri</h5>
            </div>
        </div>`,
    watch: `
        <div class="dropdowm-list flex" iteams-data>
        <div class="col-1">
            <p>Explore Watch</p>
            <h2>Apple Watch Series 9</h2>
            <h2>Explore All Apple Watch</h2>    
            <h2>Apple Watch Ultra 2</h2>    
            <h2>Apple Watch SE</h2>    
            <h2>Apple Watch Nike</h2>    
            <h2>Apple Watch Hermès</h2>    
            <h6>Compare Watch</h6>
            <h6>Why Apple Watch</h6> 
        </div>
        <div class="col-2">
        <p>Shop Watch</p>
        <h5>Shop Apple Watch</h5>
        <h5>Apple Watch Studio Apple Watch Bands</h5>
        <h5>Apple Watch Accessories</h5>
        <h5>Apple Trade In Financing</h5>
        </div>
        <div class="col-3">
        <p>More from Watch</p>
        <h5>Apple Watch Support</h5>
        <h5>AppleCare+</h5>
        <h5>watchOS 10</h5>
        <h5>watchOS 10</h5>
        <h5>Apps by Apple</h5>
        <h5>Apple Fitness+</h5>
        </div>
</div>`,
    airpods:`
    <div class="dropdowm-list flex" iteams-data>
    <div class="col-1">
        <p>Explore AirPods</p>
        <h2>Explore All AirPods</h2>
        <h2>AirPods Pro 2nd generation</h2>    
        <h2>AirPods 2nd generation</h2>    
        <h2>AirPods 3rd generation</h2>    
        <h2>AirPods Max</h2>  
        <h6>Compare AirPods</h6>  
    </div>
    <div class="col-2">
        <p>Shop AirPods</p>
        <h5>Shop AirPods</h5>
        <h5>AirPods Accessories</h5>
        </div>
    <div class="col-3">
        <p>More from AirPods</p>
        <h5>AirPods Support</h5>
        <h5>AppleCare+ for Headphones</h5>
        <h5>Apple Music</h5>
    </div>
</div>`,
tvhome:`
<div class="dropdowm-list flex" iteams-data>
    <div class="col-1">
        <p>Explore TV & Home</p>
        <h2>Explore TV & Home </h2>
        <h2>Apple TV 4K</h2>    
        <h2>HomePod</h2>    
        <h2>HomePod mini</h2>   
    </div>
    <div class="col-2">
        <p>Shop TV & Home</p>
        <h5>Shop Apple TV 4K </h5>
        <h5>Shop HomePod</h5>
        <h5>Shop HomePod mini</h5>
        <h5>Shop Siri Remote</h5>
        </div>
    <div class="col-3">
        <p>More from TV & Home</p>
        <h5>Apple TV Support</h5>
        <h5>HomePod Support</h5>
        <h5>AppleCare+</h5>
        <h5>Apple TV app</h5>
    </div>
</div>`,
entertainment:`
<div class="dropdowm-list flex" iteams-data>
    <div class="col-1">
        <p>Explore Entertainment</p>
        <h2>Explore Entertainment</h2>
        <h2>Apple One</h2>    
        <h2> Apple TV+</h2>    
        <h2>Apple Music</h2>  
        <h2>Apple Arcade</h2> 
        <h2>Apple Fitness+</h2> 
        <h2>Apple News+</h2> 
    </div>
    <div class="col-2">
        <p>Support</p>
        <h5>Apple TV+ Support</h5>
        <h5>Apple Music Support</h5>
    </div>
</div>`,
accessories:`
<div class="dropdowm-list flex" iteams-data>
    <div class="col-1">
        <p>Shop Accessories</p>
        <h2>Shop All Accessories</h2>
        <h2>Mac</h2>    
        <h2>iPad</h2>    
        <h2>iPhone</h2>  
        <h2>Apple Watch</h2>  
        <h2>AirPods</h2>  
    </div>
    <div class="col-2">
        <p>Explore Accessories</p>
        <h5>Shop Holiday Gifts</h5>
        <h5>Made by Apple</h5>
        <h5>Beats by Dr. Dre</h5>
        <h5>AirTag</h5>
        </div>
</div>`,
support:`
<div class="dropdowm-list flex" iteams-data>
    <div class="col-1">
        <p>Explore Support</p>
        <h2>Mac</h2>    
        <h2>iPad</h2>    
        <h2>iPhone</h2>  
        <h2>Apple Watch</h2>  
        <h2>AirPods</h2> 
        <h2>Tv</h2>
        <h6>Explore Support</h6>
    </div>
    <div class="col-2">
        <p>Get Help</p>
        <h5>Community</h5>
        <h5>Check Coverage</h5>
        <h5>Repair</h5>
        <h5>Contact Us</h5>
        </div>
    <div class="col-3">
        <p>Helpful Topics</p>
        <h5>Get Application</h5>
        <h5>Apple ID & Password</h5>
        <h5>Builing & Subscription</h5>
        <h5>Find My</h5>
    </div>
</div>`
}
