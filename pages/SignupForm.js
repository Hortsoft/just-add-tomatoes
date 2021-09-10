import React  from 'react'
import Mailchimp from 'react-mailchimp-form'

export default function SignupForm() {
    return (
        <div>
            <Mailchimp
action='https://hortsoft.us12.list-manage.com/subscribe/post?u=8892d24bd97ae16b0a01a534c&amp;id=e713fe4485'
fields={[
{
name: 'Email',
placeholder: 'Email',
type: 'email',
required: true
}

]}
            />
        </div>
    )
}
