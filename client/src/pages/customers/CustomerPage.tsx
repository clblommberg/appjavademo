import { IonButton, IonButtons, IonCard, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import {  removeCustomers, saveCustomers, searchCustomers } from './CustomerApi';
import Customer from './Customer';


const CustomerPage: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<Customer[]>([]);
  const history = useHistory();

  
  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = () => {
      let result = searchCustomers();
      setClientes(result);

  }

  const remove = (id: string) =>{
    removeCustomers(id);
    search();

  }

  const addCustomer = () => {
    history.push('/customers/Customers/new');

  }

  const editCustomer = (id:string) => {
    history.push('/customers/Customers/'+id);

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
        <IonCardSubtitle>Gestión de Clientes</IonCardSubtitle>
        <IonItem>
          <IonButton onClick={addCustomer} color="primary" fill="solid" slot="end"> 
            <IonIcon icon={add}></IonIcon>
            Agregar Cliente
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
              {clientes.map((cliente:Customer) => 
              <IonRow >
              <IonCol>{cliente.firstname }{cliente.lastname}</IonCol>
              <IonCol>{cliente.email}</IonCol>
              <IonCol>{cliente.phone}</IonCol>
              <IonCol>{cliente.address}</IonCol>
              <IonCol>
                <IonButton color="primary" fill="clear" onClick={() => editCustomer(String(cliente.id))}>
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

export default CustomerPage;
