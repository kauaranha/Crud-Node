import { db } from "../db.js";

export const TodosUsuarios = (_, res) =>{
    const usuarios = "SELECT * FROM pessoas";

    db.query(usuarios, (err, data)=>{
        if(err) return console.log("Problemas para trazer todos Usuarios!") + res.json(err);

        return  console.log("|Requisição Efetuada com Sucesso!") + res.status(200).json(data);
    });
};

export const Usuario = (req, res) => {
    const usuarios = "SELECT * FROM pessoas WHERE `id` = ?";

    db.query(usuarios, [req.params.id], (data)=>{
        if(err) return console.log("Problemas para trazer usuario na requisição!") + res.json(err);

        return  console.log("Requisição Efetuada com Sucesso!") + res.status(200).json(data);
    });
};

export const InsertUsers = (req,res,) =>   { 
    const q = "INSERT INTO pessoas(`nome`,`telefone`, `cpf`) VALUES(?)";
      
        const values = [
          req.body.nome,
          req.body.telefone,
          req.body.cpf,
        ];
      
        db.query(q, [values], (err) => {
          if (err) return console.log("Erro ao Cadastrar Usuarios!")+ res.json(err);

          console.log(`Método: ${req.method}`);
          return res.status(200).json("Usuário criado com sucesso.");
        
         });
      };

export const DeleteUsers = (req,res) =>   { 
        const q = "DELETE from pessoas WHERE `id` = ?";
          
        db.query(q, [req.params.id], (err) => {
            if (err) return console.log("Erro ao Deletar Usuario!") + res.json(err);
        
            return res.status(200).json("Usuário deletado com sucesso.");
          });
        };

export const DeleteAll = (_,res) =>{
    const q = "DELETE from pessoas";

    db.query(q,(err, data)=>{
        if(err) return console.log("Problemas para excluir todos registros") + res.json(err);

        return  console.log("Delte de todos registros Efetuada com sucesso!!") + res.status(200).json(data);
    })
}

 