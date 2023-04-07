angular.module('firstModule',[])
.controller('project1',($scope) => {

    $scope.msgError;
    $scope.isAdd = false;
    $scope.isEdit = false;
     
    class Alunos {
        media;
        passou;
        constructor(nome,sala,notab1,notab2,notab3,notab4){
            this.nome = nome;
            this.sala = sala;
            this.notab1 = notab1;
            this.notab2 = notab2;
            this.notab3 = notab3;
            this.notab4 = notab4;
        }

      mediaFinal(){
        let media = (Number(this.notab1) + Number(this.notab2) + Number(this.notab3) + Number(this.notab4))/4;

        return this.media = media;
      }

      verificaPassou(){
        let media = this.mediaFinal();
        if(media >= 6){
          return this.passou = "Sim";
        }else{
          return this.passou = "Não";
        }
      }
    }

    $scope.Alunos = [];

    $scope.OpenModalAdd = function(){
      $scope.isAdd = true;
      $('#exampleModal').modal('show');
    }

    $scope.addAluno = function (nome,classe,n1,n2,n3,n4){
      
      if(nome && classe && n1 && n2 && n3 && n4){

        let newAluno = new Alunos(nome,classe,n1,n2,n3,n4);
        
        $scope.media = newAluno.mediaFinal()
        $scope.passou = newAluno.verificaPassou()
        $scope.Alunos.push(newAluno)
        

        $scope.nome = '';
        $scope.classe = '';
        $scope.n1 = '';
        $scope.n2 = '';
        $scope.n3 = '';
        $scope.n4 = '';

        $('#error').removeClass('alert alert-danger');
        $scope.msgError = "";

        $scope.isAdd = false;

        $('#exampleModal').modal('hide');
  
      }else{
        $('#error').addClass('alert alert-danger')
        $scope.msgError = "Não Pode Salvar Este Item";
      }
      
    }

    $scope.alunoEditando;

    $scope.cancel = function(){
        $scope.nome = '';
        $scope.classe = '';
        $scope.n1 = '';
        $scope.n2 = '';
        $scope.n3 = '';
        $scope.n4 = '';
        $scope.alunoEditando = ''

        $('#error').removeClass('alert alert-danger');
        $scope.msgError = "";

        $scope.isAdd = false;
        $scope.isEdit = false;
      $('#exampleModal').modal('hide');
    }


    $scope.OpenModalEdit = function(aluno){
      $scope.isEdit = true;
      $('#exampleModal').modal('show');

      $scope.nome = aluno.nome;
      $scope.classe = aluno.sala;
      $scope.n1 = aluno.notab1;
      $scope.n2 = aluno.notab2;
      $scope.n3 = aluno.notab3;
      $scope.n4 = aluno.notab4;

      $scope.alunoEditando = $scope.Alunos.indexOf(aluno)

    }

    $scope.editAluno = function(nome,classe,n1,n2,n3,n4){
      let alunoEditavel = new Alunos(nome,classe,n1,n2,n3,n4)
        
      $scope.media = alunoEditavel.mediaFinal()
      $scope.passou = alunoEditavel.verificaPassou()

      $scope.Alunos.splice($scope.alunoEditando, 1, alunoEditavel)
      $('#exampleModal').modal('hide');

      $scope.nome = '';
      $scope.classe = '';
      $scope.n1 = '';
      $scope.n2 = '';
      $scope.n3 = '';
      $scope.n4 = '';
      
      $scope.alunoEditando = '';
      $scope.isEdit = false;
    }

    $scope.deleteAluno = function(Aluno){
      $scope.Alunos = $scope.Alunos.filter((item) => {
        return item != Aluno
      })
    }


  

    

})

