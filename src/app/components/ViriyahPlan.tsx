'use client'
import { useState } from "react";
import Data from '@/app/products/viriyah/data.json'

export default function ViriyahPlan() {

    const [form, setForm] = useState({
        plan: 0,
        pay: 0,
        birthDate: ''
    })

    const handleForm = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setForm(prevForm => {
            return ({
                ...prevForm,
                [name]: value
            })
        })
    }

    const today = new Date();
    const birthDateArray = form.birthDate.split('-');
    const birthDate = new Date(+ birthDateArray[0], + birthDateArray[1], + birthDateArray[2]);
    const diff = new Date(today.getTime() - birthDate.getTime());
    const age = diff.getFullYear() - 1970;

    let step = Math.floor(age / 5);
    if (step > 12) {
        step = 12;
    }
    if (step < 0) {
        step = 0;
    }

    return (
        <>
            <div>

                <select name="plan" id="plan" onChange={handleForm}>
                    <option value={0}>V Prestige Care</option>
                    <option value={1}>Viriyah Classic by BDMS</option>
                </select>
                <select name="pay" id="pay" onChange={handleForm}>
                    {form.plan == 1 ?
                        <>
                            <option value={0}>400,000</option>
                            <option value={1}>600,000</option>
                            <option value={2}>800,000</option>
                        </>
                        :
                        <>
                            <option value={0}>440,000</option>
                            <option value={1}>660,000</option>
                            <option value={2}>880,000</option>
                            <option value={3}>1,200,000</option>
                            <option value={4}>2,500,000</option>
                            <option value={5}>4,500,000</option>
                        </>
                    }
                </select>
                <input type="date" name="birthDate" id="birthDate" onChange={handleForm} />
            </div>
            <div>
                <h1>{Data[form.plan]['plan']}</h1>
                <p>{Data[form.plan]['description']}</p>
                <h2>{Number.isNaN(step) ? 'Nothing to show here' : Data[form.plan]['pay'][step][form.pay]}</h2>
            </div>
        </>
    )
}
