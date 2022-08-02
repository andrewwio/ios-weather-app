const Location = () => {
  return (
    <div>
      <div className="center mt-2-5">
        <div className="fs-2">
          Fargo
        </div>
        <div>
          Mostly Sunny
        </div>
        <div className="mt-0-5 fs-5 fw-200">
          82°
        </div>
      </div>
      <div className="mt-0-5">
        <div className="flex-container ml-1 mr-1">
          <div className="flex-1">
            Tuesday
          </div>
          <div className="flex-2-5 fs-0-5 vertical-align">
            <strong>TODAY</strong>
          </div>
          <div className="flex-0-75">
            83
          </div>
          <div>
            65
          </div>
        </div>
        <hr />
        <div className="ml-1">
          <div>
            Time
          </div>
          <div>
            Icon
          </div>
          <div>
            Temp
          </div>
        </div>
        <hr />
      </div>
      <div>
        Daily forecast
      </div>
      <div>
        Current Weather
      </div>
    </div>
  )
}

export default Location