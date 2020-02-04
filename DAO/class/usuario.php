<?php

class Usuario{
    private $codigo;
    private $nome;
    private $senha;
    
    public function __construct($nome,$email,$senha) {
        $this->nome = $nome;
        $this->email=$email;
        $this->senha=$senha;
    }
   
    public function getCodigo()
    {
        return $this->codigo;
    }
    public function setCodigo($codigo)
    {
        $this->codigo = $codigo;
    }
    public function getNome()
    {
        return $this->nome;
    }
    public function setNome($nome)
    {
        $this->nome = $nome;
    }
    public function getSenha()
    {
        return $this->preco;
    }
    public function setSenha($sennha)
    {
        $this->senha = $senha;
    }

}