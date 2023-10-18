import React from 'react'
import '../Style/Timeline.css'
function Timeline() {


   $(".wrapper .single-item > span").on("mouseenter mouseleave", function(e){

        $(".wrapper .single-item.active").removeClass("active");
        $(this).parent().addClass("active")
    })


    let activeItem = null;

function toggleActive(item) {
  activeItem = item === activeItem ? null : item;
}


  return (
    <div>




<div>


        <h1 class="mt-36 text-5xl">Don’t Trust Us! Trust Them</h1>
        <div class="wrapper">
            <div class="timeline-area">
                <div class="line-area"></div>
                <div class="single-item active">
                    <div class="img-area">

                        <a href="#">

                            <img src="/prot1.png" alt="logo" />
                            <span>John Doe, Orgniztn.</span>

                        </a>

                    </div>
                </div>

                <div class="single-item ">
                    <div class="img-area ">

                        <a href="#" class="img2">

                            <img src="/prot2.png" alt="logo"  />
                            <span>John Doe, Orgniztn.</span>

                        </a>


                    </div>
                </div>

                <div class="single-item ">
                    <div class="img-area">

                        <a href="#">

                            <img src="/prot3.png" alt="logo" />
                            <span>John Doe, Orgniztn.</span>

                        </a>


                    </div>
                </div>

                <div class="single-item ">
                    <div class="img-area">

                        <a href="#">

                            <img src="/prot4.png" alt="logo" />
                            <span>John Doe, Orgniztn.</span>

                        </a>


                    </div>
                </div>
            </div>
        </div>

</div>




    </div>
  )
}

export default Timeline