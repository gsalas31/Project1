//Linking google form to my form 

//https://docs.google.com/forms/d/e/1FAIpQLSdnV_ofgOt1hwWAA-g1vWtiM_fXVojXmqTmwTTn7dBzgA1l5w/formResponse?`

const submit=()=>{
    //entry number taken fro google forms 
    const formUrl='https://docs.google.com/forms/d/e/1FAIpQLSdnV_ofgOt1hwWAA-g1vWtiM_fXVojXmqTmwTTn7dBzgA1l5w/formResponse?'
    const nameTag="entry.2005620554";
    const emailTag="entry.1045781291";
    const messageTag="entry.839337160";

    const name = $('[name="naame"]');
    const email = $('[email="emaail"]');
    const message = $('[textarea="texmessage"]');
    console.log(name, email, message)

    fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `${nameTag}=${naame.val()}&${emailTag}=${emaail.val()}&${messageTag}=${textmessage.val()}`
    })

    .then(res => {
        console.log(res.body);
        name.val('');
        email.val('');
        message.val('');
        $('.confirmation').text('Your message has been sent. Thanks!') 
        })
    .catch(err => console.log(err))
    }
    $('#send').on('click', send)
