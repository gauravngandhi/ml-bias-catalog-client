import React, {Component} from 'react';

const AddIncidentForm =  ({handleSubmit}) =>
    <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
    <form>
        <div className={'form-group'}>
            <label htmlFor={'year'}>Year</label>
            <input type={'text'} className={'form-control'} id='year' placeholder={'enter year'} />
        </div>
        <div className={'form-group'}>
            <label htmlFor={'company'}>Company</label>
            <input type={'text'} className={'form-control'} id='company' placeholder={'enter company'}/>
        </div>
        <div className={'form-group'}>
            <label htmlFor={'industry'}>Industry</label>
            <input type={'text'} className={'form-control'} id='industry' placeholder={'enter industry'}/>
        </div>
        <div className={'form-group'}>
            <label htmlFor={'system_purpose'}>System Purpose</label>
            <input type={'text'} className={'form-control'} id='system_purpose' placeholder={'enter system purpose'}/>
        </div>
        <div className={'form-group'}>
            <label htmlFor={'type_of_bias'}>Type of Bias</label>
            <input type={'text'} className={'form-control'} id='type_of_bias' placeholder={'enter type of bias'}/>
        </div>
        <div className={'form-group'}>
            <label htmlFor={'impact'}>Impact</label>
            <input type={'text'} className={'form-control'} id='impact' placeholder={'enter Impact'}/>
        </div>
        <div className={'form-group'}>
            <label htmlFor={'link'}>Link</label>
            <input type={'text'} className={'form-control'} id='link' placeholder={'enter link'}/>
        </div>
        <div className={'form-group'}>
            <label htmlFor={'location'}>Location</label>
            <input type={'text'} className={'form-control'} id='location' placeholder={'enter year'}/>
        </div>
        <div className={'form-group'}>
            <label htmlFor={'ml_model'}>ML Model</label>
            <input type={'text'} className={'form-control'} id='ml_model' placeholder={'enter ml_model'}/>
        </div>
        <button type="button" className="btn btn-primary" onClick={()=>{
            console.log("asd");
            handleSubmit(
                document.getElementById('year').value,
                document.getElementById('company').value,
                document.getElementById('industry').value,
                document.getElementById('system_purpose').value,
                document.getElementById('type_of_bias').value,
                document.getElementById('impact').value,
                document.getElementById('link').value,
                document.getElementById('ml_model').value,
                document.getElementById('location').value)
        }}>Submit</button>
    </form>
        </div>
    </div>

export default AddIncidentForm;
