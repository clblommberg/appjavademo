import { IonButton, IonButtons, IonCard, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import {  removeEmployees, saveEmployees, searchEmployees } from './EmployeeApi';
import Employee from './Employee';


const EmployeePage: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<Employee[]>([]);
  const history = useHistory();

  
  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = () => {
      let result = searchEmployees();
      setClientes(result);

  }

  const remove = (id: string) =>{
    removeEmployees(id);
    search();

  }

  const addEmployee = () => {
    history.push('/employees/Employees/new');

  }

  const editEmployee = (id:string) => {
    history.push('/employees/Employees/'+id);

  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonCard>
        <IonCardSubtitle>Gestión de Empleados</IonCardSubtitle>
        <IonItem>
          <IonButton onClick={addEmployee} color="primary" fill="solid" slot="end"> 
            <IonIcon icon={add}></IonIcon>
            Agregar Empleado
          </IonButton>
        </IonItem>
          <IonGrid className="table">
              <IonRow  className="table-header">
              <IonCol>Nombre</IonCol>

              <IonCol>Email</IonCol>
              <IonCol>Teléfono</IonCol>
              <IonCol>Dirección</IonCol>
              <IonCol>Acciones</IonCol>
              </IonRow>
              {clientes.map((cliente:Employee) => 
              <IonRow >
              <IonCol>{cliente.firstname }{cliente.lastname}</IonCol>
              <IonCol>{cliente.email}</IonCol>
              <IonCol>{cliente.phone}</IonCol>
              <IonCol>{cliente.address}</IonCol>
              <IonCol>
                <IonButton color="primary" fill="clear" onClick={() => editEmployee(String(cliente.id))}>
                  <IonIcon icon={pencil} slot="icon-only"/>
                </IonButton>
                <IonButton color="danger" fill="clear" 
                onClick={()=> remove(String(cliente.id))}>
                  <IonIcon icon={close} slot="icon-only"/>
                </IonButton>
              </IonCol>
              </IonRow>  
              )}

          </IonGrid>
        </IonCard>
      </IonContent>
      

    </IonPage>
  );
};

export default EmployeePage;
