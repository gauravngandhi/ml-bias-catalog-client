import React, {Component} from 'react';

const AddIncidentForm =  (handleSubmit) =>
    <div>
    <form onSubmit={handleSubmit(
        document.getElementById('year').value,
        document.getElementById('company').value,
        document.getElementById('industry').value,
        document.getElementById('system_purpose').value,
        document.getElementById('type_of_bias').value,
        document.getElementById('impact').value,
        document.getElementById('link').value,
        document.getElementById('ml_model').value,
        document.getElementById('location').value)}>
        <div className={'form-group'}>
            <label for={'year'}>Year</label>
            <input type={'text'} className={'form-control'} id={'year'} placeholder={'enter year'} />
        </div>
        <div className={'form-group'}>
            <label htmlFor={'company'}>Company</label>
            <input type={'text'} className={'form-control'} id={'company'} placeholder={'enter company'}/>
        </div>
        <div className={'form-group'}>
            <label htmlFor={'industry'}>Year</label>
            <input type={'text'} className={'form-control'} id={'industry'} placeholder={'enter industry'}/>
        </div>
        <div className={'form-group'}>
            <label htmlFor={'system_purpose'}>Year</label>
            <input type={'text'} className={'form-control'} id={'system_purpose'} placeholder={'enter system purpose'}/>
        </div>
        <div className={'form-group'}>
            <label htmlFor={'type_of_bias'}>Year</label>
            <input type={'text'} className={'form-control'} id={'type_of_bias'} placeholder={'enter type of bias'}/>
        </div>
        <div className={'form-group'}>
            <label htmlFor={'impact'}>Impact</label>
            <input type={'text'} className={'form-control'} id={'impact'} placeholder={'enter Impact'}/>
        </div>
        <div className={'form-group'}>
            <label htmlFor={'link'}>Year</label>
            <input type={'text'} className={'form-control'} id={'link'} placeholder={'enter link'}/>
        </div>
        <div className={'form-group'}>
            <label htmlFor={'year'}>Year</label>
            <input type={'text'} className={'form-control'} id={'year'} placeholder={'enter year'}/>
        </div>
        <div className={'form-group'}>
            <label htmlFor={'ml_model'}>Year</label>
            <input type={'text'} className={'form-control'} id={'ml_model'} placeholder={'enter ml_model'}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>

export default AddIncidentForm;
