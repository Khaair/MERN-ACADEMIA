import React from 'react'
import CountUp from "react-countup";

const Counter = () => {
  return (
 
    <div class="counter-area bg-[white] pt-[100px] pb-[100px]">
    <div class="bootstrap-container">
      <div class="row">
        <div class="col-lg-3 mb-3">
          <div className="bg-[#06BBCC] h-[100px] text-white rounded overflow-hidden shadow-l flex justify-center text-center items-center">
            <div className="text-4xl font-bold">
              <CountUp start={0} end={500} duration={10} separator="," />
              <h4>Teachers</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-3 mb-3">
          <div className="bg-[#06BBCC] h-[100px] text-white rounded overflow-hidden shadow-l flex justify-center text-center items-center">
            <div className="text-4xl font-bold">
              <CountUp start={0} end={500} duration={10} separator="," />
              <h4>Students</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-3 mb-3">
          <div className="bg-[#06BBCC] h-[100px] text-white rounded overflow-hidden shadow-l flex justify-center text-center items-center">
            <div className="text-4xl font-bold">
              <CountUp start={0} end={500} duration={10} separator="," />
              <h4>Stuffs</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-3 mb-3">
          <div className="bg-[#06BBCC] h-[100px] text-white rounded overflow-hidden shadow-l flex justify-center text-center items-center">
            <div className="text-4xl font-bold">
              <CountUp start={0} end={500} duration={10} separator="," />
              <h4>Class Rooms</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Counter