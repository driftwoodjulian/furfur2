
class psych_retriever{
    //this is originaly created as a diferent class but in future it will be an extention of the retriever class

    constructor(buttonPush){ //buttonPush originates in viewer<<<<<<<<<<<<<<<<<<
        this.lazy = buttonPush // buttonPush will have a predetermined name that doesnt coincide with a city at all
    }
    
    async p_retrieve(){
        showAlert("Felicidades presionastes un boton, el FBI tocara a tu puerta en segundos", "warning");

        
        //let p_classy= new classifier(this.lazy);
        //let pp_thing= await p_classy.classify();

        //console.log(pp_thing);




        let p_thing= ["you", "lazy", "fucking","asshole", "bastard", "killed Keny"];

        showAlert("Prensentando informacion persivida para el vago", "warning");
        const list = document.querySelector("#climate-list");//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<here we add the rult of the fecth
        const row = document.createElement("tr");


        row.innerHTML =`
            <td>${p_thing[0]}
                    <p>FIGHT</p>
                    <p>FIGHT</p>
                    <p>FIGHT</p>
            
            </td>
            <td>${p_thing[1]}</td>
            <td>${p_thing[2]}</td>
            <td>${p_thing[3]}</td>
            <td>${p_thing[4]}</td>
            <td>${p_thing[5]}</td>
            <td><a href="#" class="btn btn-warning delete">Delete</a></td>`;

                      list.appendChild(row);
                      //selectedRow= null;
                      showAlert("Se obtuvieron datos del clima, si no se hallo la ciudad que menciono se agragaran los datos de su localizacion de", "success");
    }
}

//let test = new psych_retriever("ip area");

//let tester= test.p_retrieve();