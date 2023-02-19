# Linkedin-clone
![image](https://user-images.githubusercontent.com/37347588/217514004-9b06b0dd-6123-4e50-91d2-bfc9db7021d3.png)

This is a linkedin clone built with next.js and tailwind.css. 

Live App: [here](https://linkedin-clone-jade.vercel.app/)

# Getting Started on local

First, run the development server: `npm i` and `npm run dev`.
Create a `.env.local` file to store the information below:
- GOOGLE_CLIENT_ID=89XXXXXXXX-XXXXXXXXXXX18cdkujhs38h23g7upttse.apps.googleusercontent.com
- GOOGLE_CLIENT_SECRET=XXXXXXXXXXXX
- JWT_SECRET=e798af9a9df1035c07458aeb1c99ccad
- MONGODB_URI=From mongoDB account info
- MONGODB_DB=name of your DB

## Where to get above information
- For Google, an account is needed to get the client secret and client id [Google](https://cloud.google.com/gcp?utm_source=google&utm_medium=cpc&utm_campaign=emea-de-all-en-bkws-all-all-trial-e-gcp-1011340&utm_content=text-ad-none-any-DEV_c-CRE_500236788645-ADGP_Hybrid+%7C+BKWS+-+EXA+%7C+Txt+~+GCP+~+General%23v1-KWID_43700060393213373-kwd-6458750523-userloc_9043060&utm_term=KW_google%20cloud-NET_g-PLAC_&gclid=EAIaIQobChMIz-y2n-KF_QIVx7TtCh0FnQ3iEAAYASAAEgLErPD_BwE&gclsrc=aw.ds).
- JWT_secret can be easily generated online.
- For mongoDB, an account with mongoDB is required.

# Technologies
- Authentication and authorisation was done with [next.js](https://nextjs.org/docs)
- The app was styled with [tailwind.css](https://tailwindcss.com/docs/installation)

# Deployment
Deployment would either be with Heroku or AWS cloud service. (Still in Development).
