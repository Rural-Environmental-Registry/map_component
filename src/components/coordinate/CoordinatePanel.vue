<template>
  <div>
    <ElTooltip
        class="box-item"
        effect="dark"
        content="memorial descritivo"
        placement="top-start"
      >
      <ElButton
        class="coordinate-button"
        @click="togglePanel"
      >
        <FontAwesomeIcon iconName="file-lines" />
      </ElButton>
    </ElTooltip>
    <div class="coordinate-panel" :class="{ 'panel-open': isOpen }">
      <div class="panel-header">
        <h3>{{ COORDINATE_PANEL_TEXTS.title }}</h3>
        <ElButton
          class="close-button"
          @click="togglePanel"
        >
          <FontAwesomeIcon iconName="xmark" />
        </ElButton>
      </div>
      <div class="panel-content">
        <div class="coordinate-section">
          <h4>Sistema de Referência</h4>
          <ElSelect
            v-model="selectedSystem"
            class="coordinate-select"
            placeholder="Selecione o sistema"
            :disabled="true"
            @change="onSystemChange"
          >
            <ElOption label="SIRGAS 2000" value="SIRGAS2000" />
          </ElSelect>
        </div>

        <div class="coordinate-section">
          <h4>Formato de Coordenadas</h4>
          <ElSelect
            v-model="selectedFormat"
            class="coordinate-select"
            placeholder="Selecione o formato"
            @change="onFormatChange"
          >
            <ElOption label="Graus Decimais (DD)" value="DD" />
            <ElOption label="Graus, Minutos, Segundos (DMS)" value="DMS" />
          </ElSelect>
        </div>

        <ElTabs v-model="activeTab">
          <ElTabPane label="Preenchimento Manual" name="manual">
            <div class="coordinate-section">
              <h4>Inserir Coordenadas</h4>
              <div v-if="selectedFormat === 'DD'" class="coordinate-inputs-row">
                <div class="input-group">
                  <label>X (Longitude)</label>
                  <ElInput
                    v-model="manualInput.x"
                    placeholder="Ex: -46.6333"
                    type="number"
                    step="any"
                  />
                </div>
                <div class="input-group">
                  <label>Y (Latitude)</label>
                  <ElInput
                    v-model="manualInput.y"
                    placeholder="Ex: -23.5505"
                    type="number"
                    step="any"
                  />
                </div>
              </div>

              <div v-if="selectedFormat === 'DMS'" class="coordinate-inputs-column">
                <div class="input-group">
                  <label>X (Longitude)</label>
                  <div class="dms-inputs">
                    <ElInput
                      v-model="manualInput.xDegrees"
                      placeholder="Graus"
                      type="number"
                      step="1"
                    />
                    <ElInput
                      v-model="manualInput.xMinutes"
                      placeholder="Minutos"
                      type="number"
                      step="1"
                    />
                    <ElInput
                      v-model="manualInput.xSeconds"
                      placeholder="Segundos"
                      type="number"
                      step="any"
                    />
                  </div>
                </div>
                <div class="input-group">
                  <label>Y (Latitude)</label>
                  <div class="dms-inputs">
                    <ElInput
                      v-model="manualInput.yDegrees"
                      placeholder="Graus"
                      type="number"
                      step="1"
                    />
                    <ElInput
                      v-model="manualInput.yMinutes"
                      placeholder="Minutos"
                      type="number"
                      step="1"
                    />
                    <ElInput
                      v-model="manualInput.ySeconds"
                      placeholder="Segundos"
                      type="number"
                      step="any"
                    />
                  </div>
                </div>
              </div>
              <div class="coordinate-inputs-row">
                <div class="input-group">
                  <label>Azimuth</label>
                  <ElInput
                    v-model="manualInput.azimuth"
                    placeholder="Ex: 90"
                    type="number"
                    step="any"
                  />
                </div>
                <div class="input-group">
                  <label>Distância</label>
                  <ElInput
                    v-model="manualInput.distance"
                    placeholder="Ex: 100"
                    type="number"
                    step="any"
                  />
                </div>
              </div>
              <ElButton
                class="apply-button"
                type="primary"
                @click="addManualPoint"
              >
                {{ COORDINATE_PANEL_TEXTS.addPoint }}
              </ElButton>
              <div v-if="manualPoints.length > 0" class="geometry-list">
                <h4>Pontos Adicionados</h4>
                <div class="table-container">
                  <ElTable :data="manualPoints" style="width: 100%">
                    <ElTableColumn :label="COORDINATE_PANEL_TEXTS.index" prop="index" width="80" />
                    <ElTableColumn :label="COORDINATE_PANEL_TEXTS.x" prop="x" width="120" />
                    <ElTableColumn :label="COORDINATE_PANEL_TEXTS.y" prop="y" width="120" />
                    <ElTableColumn :label="COORDINATE_PANEL_TEXTS.azimuth" prop="azimuth" width="120" />
                    <ElTableColumn :label="COORDINATE_PANEL_TEXTS.distance" prop="distance" width="120" />
                    <ElTableColumn :label="COORDINATE_PANEL_TEXTS.actions" width="120">
                      <template #default="{ $index }">
                        <ElDropdown trigger="click">
                          <ElButton type="primary">
                            {{ COORDINATE_PANEL_TEXTS.actions }}
                            <FontAwesomeIcon iconName="chevron-down"/>
                          </ElButton>
                          <template #dropdown>
                            <ElDropdownMenu>
                              <ElDropdownItem
                                :title="COORDINATE_PANEL_TEXTS.editPointTitle"
                                :aria-label="COORDINATE_PANEL_TEXTS.editPointDescription"
                                @click="editPoint($index)"
                              >
                                <FontAwesomeIcon iconName="pencil" class="icon-black" />
                                {{ COORDINATE_PANEL_TEXTS.editPoint }}
                              </ElDropdownItem>
                              <ElDropdownItem
                                :title="COORDINATE_PANEL_TEXTS.removePointTitle"
                                :aria-label="COORDINATE_PANEL_TEXTS.removePointDescription"
                                @click="removePoint($index)"
                              >
                                <FontAwesomeIcon iconName="trash" class="icon-black" />
                                {{ COORDINATE_PANEL_TEXTS.removePoint }}
                              </ElDropdownItem>
                            </ElDropdownMenu>
                          </template>
                        </ElDropdown>
                      </template>
                    </ElTableColumn>
                  </ElTable>
                </div>
              </div>
              <ElButton
                v-if="manualPoints.length > 0"
                class="apply-button"
                type="success"
                @click="finalizeManualGeometry"
              >
                Finalizar Geometria
              </ElButton>
              <div v-if="manualGeometries.length > 0" class="geometry-list">
                <ElButton
                  type="danger"
                  class="clear-button"
                  :title="COORDINATE_PANEL_TEXTS.clearGeometriesTitle"
                  :aria-label="COORDINATE_PANEL_TEXTS.clearGeometriesDescription"
                  @click="clearGeometries"
                >
                  <FontAwesomeIcon iconName="trash" />
                  {{ COORDINATE_PANEL_TEXTS.clearGeometries }}
                </ElButton>
              </div>
            </div>
          </ElTabPane>

          <ElTabPane label="Upload CSV" name="csv">
            <div class="coordinate-section">
              <h4>Upload de Arquivo CSV</h4>
              <div class="csv-upload">
                <ElUpload
                  ref="uploadRef"
                  class="upload-area"
                  drag
                  action="#"
                  :auto-upload="false"
                  :on-change="handleFileChange"
                  :on-remove="handleFileRemove"
                  :limit="1"
                  accept=".csv"
                >
                  <FontAwesomeIcon iconName="upload" class="upload-icon" />
                  <div class="el-upload__text">
                    Arraste o arquivo CSV ou <em>clique para fazer upload</em>
                  </div>
                  <template #tip>
                    <div class="el-upload__tip">
                      O arquivo deve conter as colunas: X, Y, AZIMUTH, DISTANCIA
                    </div>
                  </template>
                </ElUpload>
                <ElButton
                  v-if="csvData.length > 0"
                  class="apply-button"
                  type="primary"
                  @click="applyCSVCoordinates"
                >
                  Aplicar Coordenadas do CSV
                </ElButton>
                <ElButton
                  type="danger"
                  class="clear-button"
                  v-if="csvData.length > 0"
                  :title="COORDINATE_PANEL_TEXTS.clearGeometriesTitle"
                  :aria-label="COORDINATE_PANEL_TEXTS.clearGeometriesDescription"
                  @click="clearGeometries"
                >
                  <FontAwesomeIcon iconName="trash" />
                  {{ COORDINATE_PANEL_TEXTS.clearGeometries }}
                </ElButton>
              </div>
            </div>
          </ElTabPane>
        </ElTabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { ElButton, ElSelect, ElOption, ElInput, ElTabs, ElTabPane, ElUpload, ElMessage, ElTable, ElTableColumn, ElDropdown, ElDropdownMenu, ElDropdownItem, ElTooltip } from 'element-plus'
import FontAwesomeIcon from '../fa-icon/FontAwesomeIcon.vue'
import Papa from 'papaparse'
import L from 'leaflet'
import { COORDINATE_PANEL_TEXTS } from '../../constants/coordinatePanel'
import { CoordinateConverter } from '../../utils/CoordinateConverter'

interface CSVRow {
  X?: string
  Y?: string
  AZIMUTH?: string
  DISTANCIA?: string
}

interface ParsedData {
  data: CSVRow[]
  meta: {
    fields: string[] | undefined
  }
}

interface Point {
  x: number
  y: number
}

interface ManualPoint {
  index: number
  x: string
  y: string
  azimuth: string
  distance: string
}

const props = defineProps<{
  map?: L.Map
}>()

const emit = defineEmits<{
  (e: 'systemChange', system: string): void
  (e: 'coordinatesChange', coordinates: { lat: number, lng: number }): void
  (e: 'geometryChange', geometry: string): void
  (e: 'geometryRemoved'): void
}>()

const isOpen = ref<boolean>(false)
const activeTab = ref<string>('manual')
const selectedSystem = ref<string>('SIRGAS2000')
const selectedFormat = ref<string>('DD')
const latitude = ref<string>('')
const longitude = ref<string>('')
const csvData = ref<Array<{ x: number, y: number, azimuth: number, distance: number }>>([])
const manualInput = ref({
  x: '',
  y: '',
  xDegrees: '',
  xMinutes: '',
  xSeconds: '',
  yDegrees: '',
  yMinutes: '',
  ySeconds: '',
  azimuth: '',
  distance: ''
})
const manualPoints = ref<any[]>([])
const manualGeometries = ref<string[]>([])
const editingIndex = ref<number | null>(null)
const uploadRef = ref()

const togglePanel = () => {
  isOpen.value = !isOpen.value
}

const onSystemChange = (value: string) => {
  emit('systemChange', value)
}

const onFormatChange = (value: string) => {
  manualInput.value = {
    x: '',
    y: '',
    xDegrees: '',
    xMinutes: '',
    xSeconds: '',
    yDegrees: '',
    yMinutes: '',
    ySeconds: '',
    azimuth: '',
    distance: ''
  }
}

const calculateNewPoint = (startPoint: Point, azimuth: number, distance: number): Point => {
  const azimuthRad = (azimuth * Math.PI) / 180

  distance = distance / 111111.111111111;

  const x = startPoint.x + distance * Math.sin(azimuthRad)
  const y = startPoint.y + distance * Math.cos(azimuthRad)

  return { x, y }
}

const generateWKT = (points: Point[]): string => {
  if (points.length === 1) {
    return `POINT(${points[0].x} ${points[0].y})`
  }

  if (points.length < 3) {
    const coordinates = points.map(p => `${p.x} ${p.y}`).join(', ')
    return `LINESTRING(${coordinates})`
  }

  const firstPoint = points[0]
  const lastPoint = points[points.length - 1]
  const isClosedPolygon = firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y

  let coordinates: string
  if (isClosedPolygon) {
    coordinates = points.map(p => `${p.x} ${p.y}`).join(', ')
  } else {
    const closedPoints = [...points, firstPoint]
    coordinates = closedPoints.map(p => `${p.x} ${p.y}`).join(', ')
  }
  return `POLYGON((${coordinates}))`
}

const convertDMSToDDFromString = (dmsString: string): number => {
  const cleanString = dmsString.trim().toUpperCase()

  if (cleanString.includes('°') || cleanString.includes('′') || cleanString.includes('″')) {
    const degrees = parseInt(cleanString.split('°')[0])
    const minutes = parseInt(cleanString.split('°')[1].split('′')[0])
    const seconds = parseFloat(cleanString.split('′')[1].split('″')[0])

    const isNegative = cleanString.includes('S') || cleanString.includes('W')

    let dd = degrees + minutes / 60 + seconds / 3600

    return isNegative ? -dd : dd
  }

  return parseFloat(dmsString)
}

const processCSVData = (data: CSVRow[]): Point[] => {
  const points: Point[] = []
  let lastPoint: Point | null = null

  for (const row of data) {
    let currentPoint: Point | null = null

    if (row.X && row.Y) {
      currentPoint = {
        x: convertDMSToDDFromString(row.X),
        y: convertDMSToDDFromString(row.Y)
      }
    }
    else if (row.AZIMUTH && row.DISTANCIA && lastPoint) {
      const azimuth = parseFloat(row.AZIMUTH)
      const distance = parseFloat(row.DISTANCIA);
      currentPoint = calculateNewPoint(lastPoint, azimuth, distance)
    }

    if (currentPoint) {
      points.push(currentPoint)
      lastPoint = currentPoint
    }
  }

  return points
}

const handleFileChange = (file: any) => {
  if (file.raw) {
    csvData.value = []
    if (props.map) {
      props.map.eachLayer((layer) => {
        if ((layer instanceof L.Polyline || layer instanceof L.Polygon || layer instanceof L.Marker) && 
            (layer as any).options?.nome === 'memorial') {
          props.map?.removeLayer(layer)
        }
      })
    }

    Papa.parse(file.raw, {
      header: true,
      complete: (results: Papa.ParseResult<CSVRow>) => {
        const headers = results.meta.fields || []
        const requiredHeaders = ['X', 'Y', 'AZIMUTH', 'DISTANCIA']

        const firstRow = results.data[0]
        if (!firstRow.X || !firstRow.Y) {
          ElMessage.error('A primeira linha do CSV deve conter as coordenadas X e Y')
          return
        }

        const points = processCSVData(results.data)
        if (points.length > 0) {
          csvData.value = points.map(p => ({
            x: p.x,
            y: p.y,
            azimuth: 0,
            distance: 0
          }))
          const wkt = generateWKT(points)
          emit('geometryChange', wkt)
        }
      }
    })
  }
}

const handleFileRemove = () => {
  csvData.value = []
  manualGeometries.value = []
  if (props.map) {
    props.map.eachLayer((layer) => {
      if ((layer instanceof L.Polyline || layer instanceof L.Polygon || layer instanceof L.Marker) && 
          (layer as any).options?.nome === 'memorial') {
        props.map?.removeLayer(layer)
      }
    })
  }
  if (uploadRef.value) {
    uploadRef.value.clearFiles()
  }
  emit('geometryRemoved')
}

const editPoint = (index: number) => {
  const point = manualPoints.value[index]
  const dms = CoordinateConverter.ddToDMS(parseFloat(point.x))
  const dmsY = CoordinateConverter.ddToDMS(parseFloat(point.y))

  manualInput.value = {
    x: point.x.toString(),
    y: point.y.toString(),
    xDegrees: dms.degrees.toString(),
    xMinutes: dms.minutes.toString(),
    xSeconds: dms.seconds.toString(),
    yDegrees: dmsY.degrees.toString(),
    yMinutes: dmsY.minutes.toString(),
    ySeconds: dmsY.seconds.toString(),
    azimuth: point.azimuth,
    distance: point.distance
  }
  editingIndex.value = index
}

const removePoint = (index: number) => {
  manualPoints.value.splice(index, 1)
  if (editingIndex.value === index) {
    editingIndex.value = null
    manualInput.value = {
      x: '',
      y: '',
      xDegrees: '',
      xMinutes: '',
      xSeconds: '',
      yDegrees: '',
      yMinutes: '',
      ySeconds: '',
      azimuth: '',
      distance: ''
    }
  }
}

const convertDMSToDD = (degrees: string, minutes: string, seconds: string): number => {
  const deg = parseFloat(degrees) || 0
  const min = parseFloat(minutes) || 0
  const sec = parseFloat(seconds) || 0
  return CoordinateConverter.dmsToDD(deg, min, sec)
}

const addManualPoint = () => {
  if (editingIndex.value !== null) {
    let x: number, y: number

    if (selectedFormat.value === 'DD') {
      if (editingIndex.value === 0 && (!manualInput.value.x || !manualInput.value.y)) {
        ElMessage.error('X e Y são obrigatórios no primeiro ponto')
        return
      }
      x = parseFloat(manualInput.value.x) || parseFloat(manualPoints.value[editingIndex.value].x)
      y = parseFloat(manualInput.value.y) || parseFloat(manualPoints.value[editingIndex.value].y)
    } else {
      if (editingIndex.value === 0 && (!manualInput.value.xDegrees || !manualInput.value.yDegrees)) {
        ElMessage.error('Graus são obrigatórios no primeiro ponto')
        return
      }
      x = manualInput.value.xDegrees ? convertDMSToDD(
        manualInput.value.xDegrees,
        manualInput.value.xMinutes,
        manualInput.value.xSeconds
      ) : parseFloat(manualPoints.value[editingIndex.value].x)
      y = manualInput.value.yDegrees ? convertDMSToDD(
        manualInput.value.yDegrees,
        manualInput.value.yMinutes,
        manualInput.value.ySeconds
      ) : parseFloat(manualPoints.value[editingIndex.value].y)
    }

    manualPoints.value[editingIndex.value] = {
      index: editingIndex.value + 1,
      x: x.toString(),
      y: y.toString(),
      azimuth: manualInput.value.azimuth || manualPoints.value[editingIndex.value].azimuth,
      distance: manualInput.value.distance || manualPoints.value[editingIndex.value].distance
    }

    editingIndex.value = null
    manualInput.value = {
      x: '',
      y: '',
      xDegrees: '',
      xMinutes: '',
      xSeconds: '',
      yDegrees: '',
      yMinutes: '',
      ySeconds: '',
      azimuth: '',
      distance: ''
    }
    return
  }

  if (manualPoints.value.length === 0) {
    let x: number, y: number

    if (selectedFormat.value === 'DD') {
      if (!manualInput.value.x || !manualInput.value.y) {
        ElMessage.error('X e Y são obrigatórios no primeiro ponto')
        return
      }
      x = parseFloat(manualInput.value.x)
      y = parseFloat(manualInput.value.y)
    } else {
      if (!manualInput.value.xDegrees || !manualInput.value.yDegrees) {
        ElMessage.error('Graus são obrigatórios no primeiro ponto')
        return
      }
      x = convertDMSToDD(
        manualInput.value.xDegrees,
        manualInput.value.xMinutes,
        manualInput.value.xSeconds
      )
      y = convertDMSToDD(
        manualInput.value.yDegrees,
        manualInput.value.yMinutes,
        manualInput.value.ySeconds
      )
    }

    manualPoints.value.push({
      index: 1,
      x: x.toString(),
      y: y.toString(),
      azimuth: manualInput.value.azimuth,
      distance: manualInput.value.distance
    })
  } else {
    const last = manualPoints.value[manualPoints.value.length - 1]
    let newPoint: Point

    if (selectedFormat.value === 'DD' && manualInput.value.x && manualInput.value.y) {
      newPoint = {
        x: parseFloat(manualInput.value.x),
        y: parseFloat(manualInput.value.y)
      }
    } else if (selectedFormat.value === 'DMS' && manualInput.value.xDegrees && manualInput.value.yDegrees) {
      newPoint = {
        x: convertDMSToDD(
          manualInput.value.xDegrees,
          manualInput.value.xMinutes,
          manualInput.value.xSeconds
        ),
        y: convertDMSToDD(
          manualInput.value.yDegrees,
          manualInput.value.yMinutes,
          manualInput.value.ySeconds
        )
      }
    } else if (manualInput.value.azimuth && manualInput.value.distance) {
      newPoint = calculateNewPoint(
        { x: parseFloat(last.x), y: parseFloat(last.y) },
        parseFloat(manualInput.value.azimuth),
        parseFloat(manualInput.value.distance)
      )
    } else {
      ElMessage.error('Forneça coordenadas ou Azimuth e Distância')
      return
    }

    manualPoints.value.push({
      index: manualPoints.value.length + 1,
      x: newPoint.x.toString(),
      y: newPoint.y.toString(),
      azimuth: manualInput.value.azimuth,
      distance: manualInput.value.distance
    })
  }

  manualInput.value = {
    x: '',
    y: '',
    xDegrees: '',
    xMinutes: '',
    xSeconds: '',
    yDegrees: '',
    yMinutes: '',
    ySeconds: '',
    azimuth: '',
    distance: ''
  }
}

const finalizeManualGeometry = () => {
  if (manualPoints.value.length > 0) {
    const points = manualPoints.value.map(p => ({ x: parseFloat(p.x), y: parseFloat(p.y) }))
    const wkt = generateWKT(points)
    manualGeometries.value.push(wkt)
    emit('geometryChange', wkt)
    manualPoints.value = []
    manualInput.value = { x: '', y: '', xDegrees: '', xMinutes: '', xSeconds: '', yDegrees: '', yMinutes: '', ySeconds: '', azimuth: '', distance: '' }
  }
}

const applyCSVCoordinates = () => {
  if (csvData.value.length > 0) {
    const points = csvData.value.map(row => ({ x: row.x, y: row.y }))
    const wkt = generateWKT(points)
    emit('geometryChange', wkt)
  }
}

const clearGeometries = () => {
  manualGeometries.value = []
  csvData.value = []
  manualPoints.value = []
  if (props.map) {
    props.map.eachLayer((layer) => {
      if ((layer instanceof L.Polyline || layer instanceof L.Polygon || layer instanceof L.Marker) && 
          (layer as any).options?.nome === 'memorial') {
        props.map?.removeLayer(layer)
      }
    })
  }
  if (uploadRef.value) {
    uploadRef.value.clearFiles()
  }
  manualInput.value = {
    x: '',
    y: '',
    xDegrees: '',
    xMinutes: '',
    xSeconds: '',
    yDegrees: '',
    yMinutes: '',
    ySeconds: '',
    azimuth: '',
    distance: ''
  }
  emit('geometryRemoved')
}

defineExpose({
  togglePanel
})
</script>

<style scoped>
.coordinate-button {
  position: absolute;
  top: 28vh;
  right: 10px;
  z-index: 1000;
  background-color: white;
  border-radius: 4px;
  padding: 8px;
  width: 35px !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: var(--mapa-base-green);

  &:hover {
    background-color: var(--mapa-base-white);
    color: var(--mapa-base-green);
    border-color: var(--mapa-base-white);
  }
}

.icon-button {
  background-color: transparent !important;
  border-color: transparent !important;
}

.coordinate-panel {
  position: absolute;
  bottom: 50px;
  right: 10px;
  z-index: 1000;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  max-height: 445px;
  max-width: 480px;
  min-width: 480px !important;
  overflow-y: auto;
  overflow-x: auto;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  opacity: 0;
  pointer-events: none;

  &.panel-open {
    transform: translateX(0);
    opacity: 1;
    pointer-events: all;
  }
}

.coordinate-inputs-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;

  h3 {
    margin: 0;
    color: var(--mapa-base-green);
    font-size: 16px;
  }

  .close-button {
    padding: 4px;
    color: #666;

    &:hover {
      color: var(--mapa-base-green);
    }
  }
}

.panel-content {
  padding: 15px;
}

.coordinate-section {
  margin-bottom: 20px;
  padding: 0.2px;

  h4 {
    margin: 0 0 10px 0;
    color: #666;
    font-size: 14px;
  }
}

.coordinate-select {
  width: 100%;
}

.coordinate-inputs-row {
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  margin-bottom: 10px;

  .el-input {
    width: 100%;
  }
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-size: 12px;
    color: #666;
  }
}

.apply-button {
  width: 100%;
  background-color: var(--mapa-base-green);
  border-color: var(--mapa-base-green);
  margin-top: 30px;

  &:hover {
    background-color: var(--mapa-base-green);
    opacity: 0.9;
  }
}

.csv-upload {
  .upload-area {
    width: 100%;
    margin-bottom: 15px;
  }

  .upload-icon {
    font-size: 24px;
    color: var(--mapa-base-green);
    margin-bottom: 10px;
  }

  .el-upload__tip {
    color: #666;
    font-size: 12px;
    margin-top: 5px;
  }
}

.geometry-list {
  margin-top: 15px;

  h4 {
    margin: 0 0 10px 0;
    color: #666;
    font-size: 14px;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 5px;
      color: #666;
      font-size: 12px;
    }
  }
}

.table-container {
  width: 100%;
  overflow-x: auto;
}

.el-dropdown-menu__item {
  display: flex;
  align-items: center;
  gap: 8px;
}

:deep(.el-dropdown-menu__item) {
  display: flex;
  align-items: center;
  gap: 8px;
}

:deep(.el-button--primary) {
  background-color: var(--mapa-base-green);
  border-color: var(--mapa-base-green);
}

:deep(.el-button--primary:hover) {
  background-color: var(--mapa-base-green);
  opacity: 0.9;
}

.clear-button {
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
}

:deep(.clear-button .el-icon) {
  margin-right: 4px;
}

.geometry-items {
  margin: 10px 0;
}

.geometry-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: #f5f7fa;
  border-radius: 4px;
  margin-bottom: 8px;
}

.geometry-text {
  font-family: monospace;
  font-size: 12px;
  color: #666;
  word-break: break-all;
}

.dms-inputs {
  display: flex;
  gap: 16px;
  justify-content: space-between;

  .el-input {
    width: 100%;
  }
}
</style>