import { IonButton, IonButtons, IonCard, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import {  removeEmployees, saveEmployees, searchEmployeeById, searchEmployees } from './EmployeeApi';
import Employee from './Employee';


const EmployeeEdit: React.FC = () => {

  const { name,id } = useParams<{ name: string; id:string;}>();

  const [employee, setEmployee] = useState<Employee>({});
  const history = useHistory();

  useEffect(() => {
    search();
  }, []);
  const search = () => {
    if (id !=='new'){
      let result = searchEmployeeById(id);
      setEmployee(result);
    }

    //   let resul = searchEmployees();
    //   setClientes(resul);

  }

  const save = () => {
    saveEmployees(employee);
    history.push('/employees/Employees')
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
        <IonCardSubtitle>{id ==='new' ? 'Agregar Empleado': 'Editar Empleado'}</IonCardSubtitle>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonInput label="Nombres" onIonChange={e =>employee.firstname= String(e.detail.value)} value={employee.firstname} labelPlacement="stacked" placeholder="Enter text"></IonInput>
            </IonItem>
          </IonCol>
          <IonCol>
            <IonItem>
              <IonInput label="Apellidos" onIonChange={e =>employee.lastname= String(e.detail.value)}  value={employee.lastname}  labelPlacement="stacked" placeholder="Enter text"></IonInput>
            </IonItem>
          </IonCol>

        </IonRow>
        <IonRow>
        <IonCol>
            <IonItem>
              <IonInput label="Correo" onIonChange={e =>employee.email= String(e.detail.value)}  value={employee.email}  labelPlacement="stacked" placeholder="Enter text"></IonInput>
            </IonItem>
          </IonCol>
          <IonCol>
            <IonItem>
              <IonInput label="Teléfono" onIonChange={e =>employee.phone= String(e.detail.value)}  value={employee.phone}  labelPlacement="stacked" placeholder="Enter text"></IonInput>
            </IonItem>          
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonInput label="Dirección" onIonChange={e =>employee.address= String(e.detail.value)}  value={employee.address}  labelPlacement="stacked" placeholder="Enter text"></IonInput>
            </IonItem>    
          </IonCol>

        </IonRow>
        <IonItem>
          <IonButton onClick={save} color="success" fill="solid" slot="end"> 
            <IonIcon icon={checkmark}></IonIcon>
            Guardar
          </IonButton>
        </IonItem>

        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default EmployeeEdit;
