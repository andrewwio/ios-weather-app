const Location = () => {
  return (
    <div>
      <div className="center mt-3-5">
        <div className="fs-2">
          Fargo
        </div>
        <div>
          Clear
        </div>
        <div className="nls-0-5 fs-6 fw-100">
          71°
        </div>
      </div>
      <div className="mt-0-5">
        <div className="flex-container ml-1-25 mr-1-25 mb-0-75">
          <div className="flex-1 fs-1-25">
            Tuesday
          </div>
          <div className="flex-2 fs-1 vertical-align">
            <strong>TODAY</strong>
          </div>
          <div className="flex-0-5 fs-1-25 fw-500">
            77
          </div>
          <div className="fs-1-25 fc-gray">
            64
          </div>
        </div>
        <hr />
        <div className="ml-1-25 mt-1">
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