
import Image from 'next/image'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button';

function Page() {
  return (
    <div className="bg">
      {/* Top Banner */}
      <div className="sub-bg">
        <div>
          <h1 className="church-name">Debre Meheret St. Michael Church</h1>
          <h2 className="church-subname">Ethiopian Orthodox Tewahedo Church</h2>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="layout-grid">
        <aside className="sidebar">

          <div className="button">divHome</div>
          <div className="button">Announcements</div>
          <div className="button"><div>Deacans</div><div>+</div></div>
          <div className="button"><div>Donation / Fundinrasing</div><div>+</div></div>
          <div className="button">Our Diocese</div>
          <div className='button'><div>Our church</div>  <div>+</div></div>
          <div className='button'>Sunday School</div>
          <div className='button'><div>Youth Corner </div><div>+</div></div>
          <div className='button'><div>Payers & Quotes </div><div>+</div></div>
          <div className='button'><div>Roly Family Meeting </div><div>+</div></div>
          <div className='button'>Contact Us</div>
                
                <div className="qr-card">
                <h2 className="qr-heading">Scan QR Code</h2>
                <p className="qr-instructions">Align the QR code within the frame to scan</p>
                <div className="qr-scan-area">
               
                <span className="qr-placeholder">Camera View</span>
               </div>
            </div>
        </aside>

        <main className="main">
          <h2 className="page-title">Where faith meets tradition...</h2>
          <div className="main-grid">

  <div className="grid-item one">
      <div className='flex justify-center items-center'>
        <Image
          src="/michatEt.png" // place your image inside the /public/images folder
          alt="Holy Celebration"
          width={200}
          height={400}
        
      
        />
      </div>
      <div className="content">

 <h1 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance">
    Service Schedule
    </h1>
        
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
       <p>  Sunday at 9:00 AM<br />
          Wednesday at 12:00 PM
          </p>
    </h3>
      
        <Button className=" bg-amber-300 m-4">Request Service</Button>
      </div>
    </div>

  <div className="grid-item two">
    <Avatar className='w-24 h-24 m-6 place-self-center'>
 {/*  <AvatarImage src="https://github.com/shadcn.png" /> */}
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<div className="content">


   <h1 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance">
      Announcements
    </h1>


    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
       <p>  Parish events <br/> news & updates
          </p>
    </h3>



<Button className=" bg-amber-300 m-4">BECOME MEMBER</Button>
</div>

    
    </div>
  <div className="grid-item three">
    
 <div className='grid  grid-cols-2 '>
<div>
   <Avatar className='w-24 h-24 m-6 place-self-center '>
 {/*  <AvatarImage src="https://github.com/shadcn.png" /> */}
  <AvatarFallback>RN</AvatarFallback>
</Avatar>
    
</div>
<div >
 <h1 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance">
      Support <br/> the <br/>  Church
    </h1>
</div>

<div>
   <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
       <p>  Programs  <br/> for all <br/> ages
          </p>
    </h3>
</div>

<div  className='place-self-end mb-4 mr-4 bg-amber-300  p-7 rounded-2xl'>
   <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
       <p>  SUPPORT <br/> THE <br/> CHURCH  
          </p>
    </h3>

</div>

 </div>

    
    </div>
</div>

<div className='flex justify-between items-center w-full  mx-28 mt-3.5'>

  <div>
     <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      3010 Earl PI NE <br/> Washington, DC 20018
    </h2>
  </div>
  <div>

     <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      (202) 529-707
    </h2>
  
  </div>
</div>
        </main>

      </div>
    </div>
  );
}

export default Page;
