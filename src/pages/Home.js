const Home =() => {
    return (
     <>

<div style={{marginTop:"150px"}} >
  <div class="row" style={{ display:'flex', justifyContent:'center', width:"110%", height:"60%"}}>
    <div class="col-sm-3">
      <div class="card">
            <div class="card-header" >
                Login Form
            </div>
            
            <div class="card-body">
                  <form>
                      <div  class="card text-bg-light mb-3">
                         <label for="exampleInputEmail1" class="form-label, fw-light">Email address</label>
                         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                       </div>
                      <div class="mb-3">
                         <label for="exampleInputPassword1" class="form-label, fw-light">Password</label>
                         <input type="password" class="form-control" id="exampleInputPassword1"/>
                      </div>
                     <div>
                        <button class="btn btn-primary">Login</button>
                      </div>
                         
                  </form>
            </div>

                       <div class="card-footer">
                      
                       <button  class="btn btn-primary">New User</button>
                       
                       </div>
        </div>
    </div>
    </div>
</div>
     </>
    )
  }
  
export default Home;
  