export const setAuthToken = (user) => {

    const currentUser = {
        email: user?.email
    }

    fetch('https://server-fawn-pi.vercel.app/jwt', {
        method: 'POST',
        headers: {
          "content-type":"application/json"
        },
        body: JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data.token);
        localStorage.setItem('hairCutToken', data.token)
        // navigate(from, { replace: true });
      })
}