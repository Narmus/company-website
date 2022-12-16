import React from "react";

export default function Support() {
  return (
    <div className="support">
      <h2>Support</h2>
      <div className="mb-1">
        <label className="form-label"> First Name</label>
        <input type="text" className="form-control" id="fName" />
      </div>
      <div className="mb-1">
        <label className="form-label"> Last Name</label>
        <input type="text" className="form-control" id="lName" />
      </div>
      <div className="mb-1">
        <label className="form-label"> E-Mail</label>
        <input type="text" className="form-control" id="email" />
      </div>
      <div className="mb-1">
        <label className="form-label"> Contact No:</label>
        <input type="text" className="form-control" id="number" />
      </div>

      <label className="form-label"> Query Topic:</label>
      <select className="form-select w-100">
        <option className="w-100" defaultValue="Select Topic">
          Select Topic
        </option>
        <option className="w-100" value="Topic 1">
          Topic 1
        </option>
        <option className="w-100" value="Topic 2">
          Topic 2
        </option>
        <option className="w-100" value="Topic 3">
          Topic 3
        </option>
        <option className="w-100" value="Topic 4">
          Topic 4
        </option>
      </select>

      <div className="mb-1">
        <label className="form-label"> Query</label>
        <textarea className="form-control"></textarea>
      </div>
    </div>
  );
}
