import { IonButton, IonButtons, IonCard, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import {  removeSuppliers, saveSuppliers, searchSuppliers } from './SupplierApi';
import Supplier from './Suppliers';


const SupplierPage: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<Supplier[]>([]);
  const history = useHistory();

  
  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = () => {
      let result = searchSuppliers();
      setClientes(result);

  }

  const remove = (id: string) =>{
    removeSuppliers(id);
    search();

  }

  const addSupplier = () => {
    history.push('/suppliers/suppliers/new');

  }

  const editSupplier = (id:string) => {
    history.push('/suppliers/suppliers/'+id);

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
        <IonCardSubtitle>Gestión de Proveedores</IonCardSubtitle>
        <IonItem>
          <IonButton onClick={addSupplier} color="primary" fill="solid" slot="end"> 
            <IonIcon icon={add}></IonIcon>
            Agregar Proveedor
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
              {clientes.map((cliente:Supplier) => 
              <IonRow >
              <IonCol>{cliente.firstname }{cliente.lastname}</IonCol>
              <IonCol>{cliente.email}</IonCol>
              <IonCol>{cliente.phone}</IonCol>
              <IonCol>{cliente.address}</IonCol>
              <IonCol>
                <IonButton color="primary" fill="clear" onClick={() => editSupplier(String(cliente.id))}>
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

export default SupplierPage;
