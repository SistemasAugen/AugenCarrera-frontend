import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const TestData = [
  {
    "id": "1",
    "rx": 'Test-1',
    "fecha": 'Test-1',
    "cliente": 'Test-1',
    "od_esfera": 'Test-1',
    "od_cilindro": 'Test-1',
    "od_eje": 'Test-1',
    "od_adicion": 'Test-1',
    "od_dip": 'Test-1',
    "od_altura": 'Test-1',
    "oi_esfera": 'Test-1',
    "oi_cilindro": 'Test-1',
    "oi_eje": 'Test-1',
    "oi_adicion": 'Test-1',
    "oi_dip": 'Test-1',
    "oi_altura": 'Test-1',
    "diseno": 'Test-1',
    "material": 'Test-1',
    "tipo_ar": 'Test-1',
    "tallado": 'Test-1',
    "servicios": 'Test-1',
    "tipo_de_armazon": 'Test-1',
    "horizontal_a": 'Test-1',
    "vertical_b": 'Test-1',
    "diagonal_ed": 'Test-1',
    "puente": 'Test-1',
    "observaciones": 'Test-1',
  },
  {
    "id": "2",
    "rx": 'Test-2',
    "fecha": 'Test-2',
    "cliente": 'Test-2',
    "od_esfera": 'Test-2',
    "od_cilindro": 'Test-2',
    "od_eje": 'Test-2',
    "od_adicion": 'Test-2',
    "od_dip": 'Test-2',
    "od_altura": 'Test-2',
    "oi_esfera": 'Test-2',
    "oi_cilindro": 'Test-2',
    "oi_eje": 'Test-2',
    "oi_adicion": 'Test-2',
    "oi_dip": 'Test-2',
    "oi_altura": 'Test-2',
    "diseno": 'Test-2',
    "material": 'Test-2',
    "tipo_ar": 'Test-2',
    "tallado": 'Test-2',
    "servicios": 'Test-2',
    "tipo_de_armazon": 'Test-2',
    "horizontal_a": 'Test-2',
    "vertical_b": 'Test-2',
    "diagonal_ed": 'Test-2',
    "puente": 'Test-2',
    "observaciones": 'Test-2',
  },
  {
    "id": "3",
    "rx": 'Test-3',
    "fecha": 'Test-3',
    "cliente": 'Test-3',
    "od_esfera": 'Test-3',
    "od_cilindro": 'Test-3',
    "od_eje": 'Test-3',
    "od_adicion": 'Test-3',
    "od_dip": 'Test-3',
    "od_altura": 'Test-3',
    "oi_esfera": 'Test-3',
    "oi_cilindro": 'Test-3',
    "oi_eje": 'Test-3',
    "oi_adicion": 'Test-3',
    "oi_dip": 'Test-3',
    "oi_altura": 'Test-3',
    "diseno": 'Test-3',
    "material": 'Test-3',
    "tipo_ar": 'Test-3',
    "tallado": 'Test-3',
    "servicios": 'Test-3',
    "tipo_de_armazon": 'Test-3',
    "horizontal_a": 'Test-3',
    "vertical_b": 'Test-3',
    "diagonal_ed": 'Test-3',
    "puente": 'Test-3',
    "observaciones": 'Test-3',
  },
  {
    "id": "4",
    "rx": 'Test-4',
    "fecha": 'Test-4',
    "cliente": 'Test-4',
    "od_esfera": 'Test-4',
    "od_cilindro": 'Test-4',
    "od_eje": 'Test-4',
    "od_adicion": 'Test-4',
    "od_dip": 'Test-4',
    "od_altura": 'Test-4',
    "oi_esfera": 'Test-4',
    "oi_cilindro": 'Test-4',
    "oi_eje": 'Test-4',
    "oi_adicion": 'Test-4',
    "oi_dip": 'Test-4',
    "oi_altura": 'Test-4',
    "diseno": 'Test-4',
    "material": 'Test-4',
    "tipo_ar": 'Test-4',
    "tallado": 'Test-4',
    "servicios": 'Test-4',
    "tipo_de_armazon": 'Test-4',
    "horizontal_a": 'Test-4',
    "vertical_b": 'Test-4',
    "diagonal_ed": 'Test-4',
    "puente": 'Test-4',
    "observaciones": 'Test-4',
  },
  {
    "id": "5",
    "rx": 'Test-5',
    "fecha": 'Test-5',
    "cliente": 'Test-5',
    "od_esfera": 'Test-5',
    "od_cilindro": 'Test-5',
    "od_eje": 'Test-5',
    "od_adicion": 'Test-5',
    "od_dip": 'Test-5',
    "od_altura": 'Test-5',
    "oi_esfera": 'Test-5',
    "oi_cilindro": 'Test-5',
    "oi_eje": 'Test-5',
    "oi_adicion": 'Test-5',
    "oi_dip": 'Test-5',
    "oi_altura": 'Test-5',
    "diseno": 'Test-5',
    "material": 'Test-5',
    "tipo_ar": 'Test-5',
    "tallado": 'Test-5',
    "servicios": 'Test-5',
    "tipo_de_armazon": 'Test-5',
    "horizontal_a": 'Test-5',
    "vertical_b": 'Test-5',
    "diagonal_ed": 'Test-5',
    "puente": 'Test-5',
    "observaciones": 'Test-5',
  },
  {
    "id": "6",
    "rx": 'Test-6',
    "fecha": 'Test-6',
    "cliente": 'Test-6',
    "od_esfera": 'Test-6',
    "od_cilindro": 'Test-6',
    "od_eje": 'Test-6',
    "od_adicion": 'Test-6',
    "od_dip": 'Test-6',
    "od_altura": 'Test-6',
    "oi_esfera": 'Test-6',
    "oi_cilindro": 'Test-6',
    "oi_eje": 'Test-6',
    "oi_adicion": 'Test-6',
    "oi_dip": 'Test-6',
    "oi_altura": 'Test-6',
    "diseno": 'Test-6',
    "material": 'Test-6',
    "tipo_ar": 'Test-6',
    "tallado": 'Test-6',
    "servicios": 'Test-6',
    "tipo_de_armazon": 'Test-6',
    "horizontal_a": 'Test-6',
    "vertical_b": 'Test-6',
    "diagonal_ed": 'Test-6',
    "puente": 'Test-6',
    "observaciones": 'Test-6',
  },
  {
    "id": "7",
    "rx": 'Test-7',
    "fecha": 'Test-7',
    "cliente": 'Test-7',
    "od_esfera": 'Test-7',
    "od_cilindro": 'Test-7',
    "od_eje": 'Test-7',
    "od_adicion": 'Test-7',
    "od_dip": 'Test-7',
    "od_altura": 'Test-7',
    "oi_esfera": 'Test-7',
    "oi_cilindro": 'Test-7',
    "oi_eje": 'Test-7',
    "oi_adicion": 'Test-7',
    "oi_dip": 'Test-7',
    "oi_altura": 'Test-7',
    "diseno": 'Test-7',
    "material": 'Test-7',
    "tipo_ar": 'Test-7',
    "tallado": 'Test-7',
    "servicios": 'Test-7',
    "tipo_de_armazon": 'Test-7',
    "horizontal_a": 'Test-7',
    "vertical_b": 'Test-7',
    "diagonal_ed": 'Test-7',
    "puente": 'Test-7',
    "observaciones": 'Test-7',
  },
  {
    "id": "8",
    "rx": 'Test-8',
    "fecha": 'Test-8',
    "cliente": 'Test-8',
    "od_esfera": 'Test-8',
    "od_cilindro": 'Test-8',
    "od_eje": 'Test-8',
    "od_adicion": 'Test-8',
    "od_dip": 'Test-8',
    "od_altura": 'Test-8',
    "oi_esfera": 'Test-8',
    "oi_cilindro": 'Test-8',
    "oi_eje": 'Test-8',
    "oi_adicion": 'Test-8',
    "oi_dip": 'Test-8',
    "oi_altura": 'Test-8',
    "diseno": 'Test-8',
    "material": 'Test-8',
    "tipo_ar": 'Test-8',
    "tallado": 'Test-8',
    "servicios": 'Test-8',
    "tipo_de_armazon": 'Test-8',
    "horizontal_a": 'Test-8',
    "vertical_b": 'Test-8',
    "diagonal_ed": 'Test-8',
    "puente": 'Test-8',
    "observaciones": 'Test-8',
  },
  {
    "id": "9",
    "rx": 'Test-9',
    "fecha": 'Test-9',
    "cliente": 'Test-9',
    "od_esfera": 'Test-9',
    "od_cilindro": 'Test-9',
    "od_eje": 'Test-9',
    "od_adicion": 'Test-9',
    "od_dip": 'Test-9',
    "od_altura": 'Test-9',
    "oi_esfera": 'Test-9',
    "oi_cilindro": 'Test-9',
    "oi_eje": 'Test-9',
    "oi_adicion": 'Test-9',
    "oi_dip": 'Test-9',
    "oi_altura": 'Test-9',
    "diseno": 'Test-9',
    "material": 'Test-9',
    "tipo_ar": 'Test-9',
    "tallado": 'Test-9',
    "servicios": 'Test-9',
    "tipo_de_armazon": 'Test-9',
    "horizontal_a": 'Test-9',
    "vertical_b": 'Test-9',
    "diagonal_ed": 'Test-9',
    "puente": 'Test-9',
    "observaciones": 'Test-9',
  },
  {
    "id": "10",
    "rx": 'Test-10',
    "fecha": 'Test-10',
    "cliente": 'Test-10',
    "od_esfera": 'Test-10',
    "od_cilindro": 'Test-10',
    "od_eje": 'Test-10',
    "od_adicion": 'Test-10',
    "od_dip": 'Test-10',
    "od_altura": 'Test-10',
    "oi_esfera": 'Test-10',
    "oi_cilindro": 'Test-10',
    "oi_eje": 'Test-10',
    "oi_adicion": 'Test-10',
    "oi_dip": 'Test-10',
    "oi_altura": 'Test-10',
    "diseno": 'Test-10',
    "material": 'Test-10',
    "tipo_ar": 'Test-10',
    "tallado": 'Test-10',
    "servicios": 'Test-10',
    "tipo_de_armazon": 'Test-10',
    "horizontal_a": 'Test-10',
    "vertical_b": 'Test-10',
    "diagonal_ed": 'Test-10',
    "puente": 'Test-10',
    "observaciones": 'Test-10',
  },
  {
    "id": "11",
    "rx": 'Test-11',
    "fecha": 'Test-11',
    "cliente": 'Test-11',
    "od_esfera": 'Test-11',
    "od_cilindro": 'Test-11',
    "od_eje": 'Test-11',
    "od_adicion": 'Test-11',
    "od_dip": 'Test-11',
    "od_altura": 'Test-11',
    "oi_esfera": 'Test-11',
    "oi_cilindro": 'Test-11',
    "oi_eje": 'Test-11',
    "oi_adicion": 'Test-11',
    "oi_dip": 'Test-11',
    "oi_altura": 'Test-11',
    "diseno": 'Test-11',
    "material": 'Test-11',
    "tipo_ar": 'Test-11',
    "tallado": 'Test-11',
    "servicios": 'Test-11',
    "tipo_de_armazon": 'Test-11',
    "horizontal_a": 'Test-11',
    "vertical_b": 'Test-11',
    "diagonal_ed": 'Test-11',
    "puente": 'Test-11',
    "observaciones": 'Test-11',
  },
  {
    "id": "12",
    "rx": 'Test-12',
    "fecha": 'Test-12',
    "cliente": 'Test-12',
    "od_esfera": 'Test-12',
    "od_cilindro": 'Test-12',
    "od_eje": 'Test-12',
    "od_adicion": 'Test-12',
    "od_dip": 'Test-12',
    "od_altura": 'Test-12',
    "oi_esfera": 'Test-12',
    "oi_cilindro": 'Test-12',
    "oi_eje": 'Test-12',
    "oi_adicion": 'Test-12',
    "oi_dip": 'Test-12',
    "oi_altura": 'Test-12',
    "diseno": 'Test-12',
    "material": 'Test-12',
    "tipo_ar": 'Test-12',
    "tallado": 'Test-12',
    "servicios": 'Test-12',
    "tipo_de_armazon": 'Test-12',
    "horizontal_a": 'Test-12',
    "vertical_b": 'Test-12',
    "diagonal_ed": 'Test-12',
    "puente": 'Test-12',
    "observaciones": 'Test-12',
  },
  {
    "id": "13",
    "rx": 'Test-13',
    "fecha": 'Test-13',
    "cliente": 'Test-13',
    "od_esfera": 'Test-13',
    "od_cilindro": 'Test-13',
    "od_eje": 'Test-13',
    "od_adicion": 'Test-13',
    "od_dip": 'Test-13',
    "od_altura": 'Test-13',
    "oi_esfera": 'Test-13',
    "oi_cilindro": 'Test-13',
    "oi_eje": 'Test-13',
    "oi_adicion": 'Test-13',
    "oi_dip": 'Test-13',
    "oi_altura": 'Test-13',
    "diseno": 'Test-13',
    "material": 'Test-13',
    "tipo_ar": 'Test-13',
    "tallado": 'Test-13',
    "servicios": 'Test-13',
    "tipo_de_armazon": 'Test-13',
    "horizontal_a": 'Test-13',
    "vertical_b": 'Test-13',
    "diagonal_ed": 'Test-13',
    "puente": 'Test-13',
    "observaciones": 'Test-13',
  },
  {
    "id": "14",
    "rx": 'Test-14',
    "fecha": 'Test-14',
    "cliente": 'Test-14',
    "od_esfera": 'Test-14',
    "od_cilindro": 'Test-14',
    "od_eje": 'Test-14',
    "od_adicion": 'Test-14',
    "od_dip": 'Test-14',
    "od_altura": 'Test-14',
    "oi_esfera": 'Test-14',
    "oi_cilindro": 'Test-14',
    "oi_eje": 'Test-14',
    "oi_adicion": 'Test-14',
    "oi_dip": 'Test-14',
    "oi_altura": 'Test-14',
    "diseno": 'Test-14',
    "material": 'Test-14',
    "tipo_ar": 'Test-14',
    "tallado": 'Test-14',
    "servicios": 'Test-14',
    "tipo_de_armazon": 'Test-14',
    "horizontal_a": 'Test-14',
    "vertical_b": 'Test-14',
    "diagonal_ed": 'Test-14',
    "puente": 'Test-14',
    "observaciones": 'Test-14',
  },
  {
    "id": "15",
    "rx": 'Test-15',
    "fecha": 'Test-15',
    "cliente": 'Test-15',
    "od_esfera": 'Test-15',
    "od_cilindro": 'Test-15',
    "od_eje": 'Test-15',
    "od_adicion": 'Test-15',
    "od_dip": 'Test-15',
    "od_altura": 'Test-15',
    "oi_esfera": 'Test-15',
    "oi_cilindro": 'Test-15',
    "oi_eje": 'Test-15',
    "oi_adicion": 'Test-15',
    "oi_dip": 'Test-15',
    "oi_altura": 'Test-15',
    "diseno": 'Test-15',
    "material": 'Test-15',
    "tipo_ar": 'Test-15',
    "tallado": 'Test-15',
    "servicios": 'Test-15',
    "tipo_de_armazon": 'Test-15',
    "horizontal_a": 'Test-15',
    "vertical_b": 'Test-15',
    "diagonal_ed": 'Test-15',
    "puente": 'Test-15',
    "observaciones": 'Test-15',
  },
  {
    "id": "16",
    "rx": 'Test-16',
    "fecha": 'Test-16',
    "cliente": 'Test-16',
    "od_esfera": 'Test-16',
    "od_cilindro": 'Test-16',
    "od_eje": 'Test-16',
    "od_adicion": 'Test-16',
    "od_dip": 'Test-16',
    "od_altura": 'Test-16',
    "oi_esfera": 'Test-16',
    "oi_cilindro": 'Test-16',
    "oi_eje": 'Test-16',
    "oi_adicion": 'Test-16',
    "oi_dip": 'Test-16',
    "oi_altura": 'Test-16',
    "diseno": 'Test-16',
    "material": 'Test-16',
    "tipo_ar": 'Test-16',
    "tallado": 'Test-16',
    "servicios": 'Test-16',
    "tipo_de_armazon": 'Test-16',
    "horizontal_a": 'Test-16',
    "vertical_b": 'Test-16',
    "diagonal_ed": 'Test-16',
    "puente": 'Test-16',
    "observaciones": 'Test-16',
  }
]

const columns = [
  { field: 'rx', headerName: 'RX', width: 70 },
  { field: 'cliente', headerName: 'cliente', width: 130 },
  { field: 'material', headerName: 'material', width: 130 },
  { field: 'antirreflejante', headerName: 'antirreflejante', width: 130 },
  { field: 'diseno', headerName: 'diseno', width: 130 },
  { field: 'servicios', headerName: 'servicios', width: 130 },
  { field: 'observaciones', headerName: 'observaciones', width: 130 },
];

const rown = [
  { id: 1, field: 'rx', headerName: 'RX', width: 70 },
  { id: 3, field: 'cliente', headerName: 'cliente', width: 130 },
  { id: 16, field: 'diseno', headerName: 'diseno', width: 130 },
  { id: 17, field: 'material', headerName: 'material', width: 130 },
  { id: 18, field: 'antirreflejante', headerName: 'antirreflejante', width: 130 },
  { id: 27, field: 'servicios', headerName: 'servicios', width: 130 },
  { id: 21, field: 'observaciones', headerName: 'observaciones', width: 130 },
]

export default function RxList() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={TestData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
