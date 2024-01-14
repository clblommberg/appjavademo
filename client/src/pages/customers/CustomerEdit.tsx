import { IonButton, IonButtons, IonCard, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import {  removeCustomers, saveCustomers, searchCustomerById, searchCustomers } from './CustomerApi';
import Customer from './Customer';


const CustomerEdit: React.FC = () => {

  const { name,id } = useParams<{ name: string; id:string;}>();

  const [customer, setCustomer] = useState<Customer>({});
  const history = useHistory();

  useEffect(() => {
    search();
  }, []);
  const search = () => {
    if (id !=='new'){
      let result = searchCustomerById(id);
      setCustomer(result);
    }

    //   let resul = searchCustomers();
    //   setClientes(resul);

  }

  const save = () => {
    saveCustomers(customer);
    history.push('/customers/Customers')
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
        <IonCardSubtitle>{id ==='new' ? 'Agregar Cliente': 'Editar CLiente'}</IonCardSubtitle>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonInput label="Nombres" onIonChange={e =>customer.firstname= String(e.detail.value)} value={customer.firstname} labelPlacement="stacked" placeholder="Enter text"></IonInput>
            </IonItem>
          </IonCol>
          <IonCol>
            <IonItem>
              <IonInput label="Apellidos" onIonChange={e =>customer.lastname= String(e.detail.value)}  value={customer.lastname}  labelPlacement="stacked" placeholder="Enter text"></IonInput>
            </IonItem>
          </IonCol>

        </IonRow>
        <IonRow>
        <IonCol>
            <IonItem>
              <IonInput label="Correo" onIonChange={e =>customer.email= String(e.detail.value)}  value={customer.email}  labelPlacement="stacked" placeholder="Enter text"></IonInput>
            </IonItem>
          </IonCol>
          <IonCol>
            <IonItem>
              <IonInput label="Teléfono" onIonChange={e =>customer.phone= String(e.detail.value)}  value={customer.phone}  labelPlacement="stacked" placeholder="Enter text"></IonInput>
            </IonItem>          
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonInput label="Dirección" onIonChange={e =>customer.address= String(e.detail.value)}  value={customer.address}  labelPlacement="stacked" placeholder="Enter text"></IonInput>
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

export default CustomerEdit;
