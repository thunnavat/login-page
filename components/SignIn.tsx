const SignIn = () => {
  return(
    <div>
      <div className="grid grid-cols-1 gap-2 justify-items-center my-20">
        <form className="grid grid-cols-1 gap-2 justify-items-center">
          <h3 className="text-[#E9E9E9] mb-14">SIGN IN</h3>
          <input type="email" placeholder="Email address" className="bg-[#282D3B] rounded-[18px] text-[#98A0B5] px-10 py-3 mb-5" />
          <input type="text" placeholder="Password" className="bg-[#282D3B] rounded-[18px] text-[#98A0B5] px-10 py-3 mb-10" />
          <button className="rounded-[18px] bg-[#EC2F2F] filter drop-shadow-redDrop shadow-innerWhite text-[#F9F9F9] px-20 py-3 mb-3">SIGN IN</button>
        </form>
        <p className="text-[#98A0B5] font-sans underline mb-10">Forgot Password?</p>
        <button className="border rounded-[18px] text-[#98A0B5] px-5 py-3 mb-5">REGISTER</button>
        <p className="text-[#98A0B5] font-sans w-96 text-center">Hanc ego assentior cum a philosophis compluribus permulta dicantur.</p>
      </div>
    </div>
  )
}

export default SignIn